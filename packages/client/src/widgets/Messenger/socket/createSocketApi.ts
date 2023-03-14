import { Socket } from 'socket.io-client'
import { MessengerEvents } from 'widgets/Messenger/socket/types'
import { Message, Room } from 'shared/types/slices'

const createMessengerSocketApi = (socket: Socket) => {
  return {
    subscribes: {
      onAddGroup(callback: (room: Room) => void) {
        socket.on(MessengerEvents.ADD_ROOM, callback)
      },
      onAddMessage(callback: (message: Message) => void) {
        socket.off(MessengerEvents.ADD_MESSAGE)
        socket.on(MessengerEvents.ADD_MESSAGE, callback)
      },
      onUserTyping(callback: () => void) {
        socket.on(MessengerEvents.TYPING, () => {
          callback()
        })
      },
      onNoLongerTyping(callback: () => void) {
        socket.on(MessengerEvents.NO_LONGER_TYPING, () => {
          callback()
        })
      }
    },
    actions: {
      startChat(targetId: string) {
        socket.emit(MessengerEvents.START_CHAT, { targetId: Number(targetId) })
      },
      subscribeToRoom(roomId: number) {
        socket.emit(MessengerEvents.SUBSCRIBE_TO_ROOM, { roomId })
      },
      unsubscribeFromRoom(roomId: number) {
        socket.emit(MessengerEvents.UNSUBSCRIBE_FROM_ROOM, { roomId })
      },
      sendMessage(roomId: number, messageText: string) {
        if (!roomId) return
        socket.emit(MessengerEvents.SEND_MESSAGE, { roomId, messageText })
      },
      startTyping(roomId: number) {
        console.log(roomId)
        socket.emit(MessengerEvents.TYPING, { roomId })
      },
      typingStopped(roomId: number) {
        console.log(roomId)
        socket.emit(MessengerEvents.NO_LONGER_TYPING, { roomId })
      }
    }
  }
}

export default createMessengerSocketApi

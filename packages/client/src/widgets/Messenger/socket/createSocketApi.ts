import { Socket } from 'socket.io-client'
import { MessengerEvents } from 'widgets/Messenger/socket/types'
import { Message, Room } from 'shared/types/slices'
import { MessengerForm } from 'widgets/Messenger/ui/MessengerInput/MessengerInput'
import { withFormData } from 'shared/lib/helpers'
import { UploadProperties } from 'app/config/globals'
import { reformatAttachedImage } from 'widgets/Messenger/lib/helpers/reformatAttachedImage'

const createMessengerSocketApi = (socket: Socket) => {
  return {
    socket,
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
      },
      onMessagesRead(callback: () => void) {
        socket.on(MessengerEvents.MESSAGE_READ, () => {
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
      sendMessage(roomId: number, { message, file }: MessengerForm) {
        if (!roomId) {
          return
        }

        socket.emit(MessengerEvents.SEND_MESSAGE, { roomId,
          messageText: message, file: reformatAttachedImage(file) })
      },
      startTyping(roomId: number) {
        socket.emit(MessengerEvents.TYPING, { roomId })
      },
      typingStopped(roomId: number) {
        socket.emit(MessengerEvents.NO_LONGER_TYPING, { roomId })
      },
      makeMessagesRead(message: Message) {
        socket.emit(MessengerEvents.MESSAGE_READ, message)
      }
    }
  }
}

export default createMessengerSocketApi

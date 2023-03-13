import { Socket } from 'socket.io-client'
import { MessengerEvents } from 'widgets/Messenger/socket/types'

const createMessengerSocketApi = (socket: Socket) => {
  return {
    subscribes: {

    },
    actions: {
      startChat(targetId: string) {
        socket.emit(MessengerEvents.START_CHAT, { targetId: Number(targetId) })
      }

    }
  }
}

export default createMessengerSocketApi

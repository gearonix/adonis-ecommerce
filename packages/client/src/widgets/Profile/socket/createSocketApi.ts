import { Socket } from 'socket.io-client'
import { StatusEvents } from 'app/providers/Authorization/socket'
import { UserStatus } from 'shared/config/consts/others'
import { toast } from 'react-toastify'
import { Message } from 'widgets/Messenger'

const createAuthSocketApi = (socket: Socket) => {
  return {
    subscribes: {
      onStatusChanged(callback: (status: UserStatus) => void) {
        socket.on?.(StatusEvents.STATUS_CHANGED, (data: {status: UserStatus}) => {
          callback(data.status)
        })
      },
      onReceivedNotification(callback: (message: Message) => void) {
        const event = StatusEvents.SHOW_NOTIFICATION
        socket.off?.(event)?.on?.(event, (message: Message) => {
          callback(message)
        })
      }
    },
    actions: {
      subscribeToStatus(targetId: number | undefined) {
        if (targetId) {
          socket.emit?.(StatusEvents.SUBSCRIBE_TO_STATUS, { targetId })
        }
      }

    }
  }
}

export default createAuthSocketApi

import { Socket } from 'socket.io-client'
import { StatusEvents } from 'app/providers/Authorization/socket'
import { UserStatus } from 'shared/config/consts/others'

const createAuthSocketApi = (socket: Socket) => {
  return {
    subscribes: {
      onStatusChanged(callback: (status: UserStatus) => void) {
        socket.on?.(StatusEvents.STATUS_CHANGED, (data: {status: UserStatus}) => {
          callback(data.status)
        })
      }
    },
    actions: {
      subscribeToStatus(targetId: number) {
        socket.emit?.(StatusEvents.SUBSCRIBE_TO_STATUS, { targetId })
      }

    }
  }
}

export default createAuthSocketApi

import { SocketGateWays } from 'app/config/globals'
import { Socket } from 'socket.io-client'
import { useContext } from 'react'
import { SocketContext as MessengerSocketContext } from 'widgets/Messenger'
import { AuthSocketContext } from 'app/providers/Authorization/socket'

export const useSocket = (gateway: keyof typeof SocketGateWays): Socket => {
  const messengerConnection = useContext(MessengerSocketContext)
  const statusConnection = useContext(AuthSocketContext)

  switch (gateway) {
    case 'messenger':
      return messengerConnection
    case 'auth':
      return statusConnection
  }
}

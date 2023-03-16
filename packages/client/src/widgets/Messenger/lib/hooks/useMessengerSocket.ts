import createMessengerSocketApi from 'widgets/Messenger/socket/createSocketApi'
import { useContext } from 'react'
import { SocketContext as MessengerSocketContext } from 'widgets/Messenger'

export const useMessengerSocket = () => {
  const socket = useContext(MessengerSocketContext)
  return createMessengerSocketApi(socket)
}

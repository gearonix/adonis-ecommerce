import { useContext } from 'react'
import { SocketContext } from 'widgets/Messenger'
import { Socket } from 'socket.io-client'

export const useSocket = (): Socket => {
  const socket = useContext(SocketContext)

  return socket
}

import { Socket } from 'socket.io-client'
import { createContext } from 'react'


const SocketContext = createContext<Socket>({} as Socket)


export default SocketContext

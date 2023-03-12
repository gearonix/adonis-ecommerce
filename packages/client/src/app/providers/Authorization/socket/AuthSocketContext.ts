import { Socket } from 'socket.io-client'
import { createContext } from 'react'


const AuthSocketContext = createContext<Socket>({} as Socket)


export default AuthSocketContext

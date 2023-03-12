import { io } from 'socket.io-client'
import appConfig from 'app/config/config'
import { DevGlobalVars } from 'dev/components'
import { CFC } from 'shared/types/components'
import { SocketGateWays } from 'app/config/globals'
import AuthSocketContext from './AuthSocketContext'

const AuthSocketProvider: CFC = ({ children }) => {
  const connection = io(`${appConfig.WEBSOCKET_URL}/${SocketGateWays.AUTH}`, { withCredentials: true })

  DevGlobalVars.setSocket('auth', connection)

  return <AuthSocketContext.Provider value={connection}>
    {children}
  </AuthSocketContext.Provider>
}


export default AuthSocketProvider

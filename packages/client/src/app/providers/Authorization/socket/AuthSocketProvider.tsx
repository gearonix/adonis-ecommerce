import { io, Socket } from 'socket.io-client'
import { DevGlobalVars } from 'dev/components'
import { CFC } from 'shared/types/components'
import AuthSocketContext from './AuthSocketContext'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { AuthSelectors } from 'widgets/Login'
import { SocketPaths } from 'app/config/globals'
import appConfig from 'app/config/config'

const AuthSocketProvider: CFC = ({ children }) => {
  const isAuthorized = useSelector(AuthSelectors.isAuthorized)
  const [socket, setSocket] = useState<Socket>({} as Socket)
  const userId = useSelector(AuthSelectors.userId) as number

  useEffect(() => {
    if (!isAuthorized) {
      socket.disconnect?.()
      return
    }
    const connectionOptions = {
      auth: { userid: userId.toString?.() },
      path: SocketPaths.auth
    }

    const connection = io(appConfig.WEBSOCKET_URL as string, connectionOptions)

    DevGlobalVars.setSocket('auth', connection)
    setSocket(connection)
  }, [userId, isAuthorized])


  return <AuthSocketContext.Provider value={socket}>
    {children}
  </AuthSocketContext.Provider>
}

export default AuthSocketProvider

import { io, Socket } from 'socket.io-client'
import appConfig from 'app/config/config'
import { DevGlobalVars } from 'dev/components'
import { CFC } from 'shared/types/components'
import { SocketGateWays } from 'app/config/globals'
import AuthSocketContext from './AuthSocketContext'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { AuthSelectors } from 'widgets/Login'

const AuthSocketProvider: CFC = ({ children }) => {
  const isAuthorized = useSelector(AuthSelectors.isAuthorized)
  const [socket, setSocket] = useState<Socket>({} as Socket)

  useEffect(() => {
    if (!isAuthorized) {
      socket.disconnect?.()
      return
    }

    const connectionUrl = `${appConfig.WEBSOCKET_URL}/${SocketGateWays.auth}`
    const connection = io(connectionUrl, { withCredentials: true })

    DevGlobalVars.setSocket('auth', connection)
    setSocket(connection)
  }, [isAuthorized])


  return <AuthSocketContext.Provider value={socket}>
    {children}
  </AuthSocketContext.Provider>
}


export default AuthSocketProvider

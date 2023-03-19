import { io, Socket } from 'socket.io-client'
import appConfig from 'app/config/config'
import { DevGlobalVars } from 'dev/components'
import SocketContext from 'widgets/Messenger/socket/provider/SocketContext'
import { CFC } from 'shared/types/components'
import { SocketGateWays } from 'app/config/globals'
import { useSelector } from 'shared/types/redux'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthSelectors } from 'widgets/Login'

const SocketProvider: CFC = ({ children }) => {
  const userId = useSelector(AuthSelectors.userId) as number
  const isAuthorized = useSelector(AuthSelectors.isAuthorized)
  const [socket, setSocket] = useState<Socket>({} as Socket)
  const router = useRouter()


  const disconnect = () => {
    socket.disconnect()
  }

  useEffect(() => {
    if (!isAuthorized) {
      socket.disconnect?.()
      return
    }
    const connectionUrl = `${appConfig.WEBSOCKET_URL}/${SocketGateWays.messenger}`
    const connection = io(connectionUrl,
        { withCredentials: true, extraHeaders: { userId: userId.toString() } })
    DevGlobalVars.setSocket('messenger', connection)
    setSocket(connection)
  }, [isAuthorized, userId])

  useEffect(() => {
    router.events.on('routeChangeStart', disconnect)
    return () => {
      router.events.off('routeChangeStart', disconnect)
    }
  }, [disconnect])

  return <SocketContext.Provider value={socket}>
    {children}
  </SocketContext.Provider>
}


export default SocketProvider

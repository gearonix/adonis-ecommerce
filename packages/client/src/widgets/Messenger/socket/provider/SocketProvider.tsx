import { io } from 'socket.io-client'
import appConfig from 'app/config/config'
import { DevGlobalVars } from 'dev/components'
import SocketContext from 'widgets/Messenger/socket/provider/SocketContext'
import { CFC } from 'shared/types/components'
import { SocketGateWays } from 'app/config/globals'
import { useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'shared/selectors'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const SocketProvider: CFC = ({ children }) => {
  const userId = useSelector(AuthSelectors.userId) as number
  const router = useRouter()
  const connection = io(`${appConfig.WEBSOCKET_URL}/${SocketGateWays.messenger}`,
      { withCredentials: true, extraHeaders: { userId: userId.toString() } })

  DevGlobalVars.setSocket('messenger', connection)

  const disconnect = () => {
    connection.disconnect()
  }

  useEffect(() => {
    router.events.on('routeChangeStart', disconnect)
    return () => {
      router.events.off('routeChangeStart', disconnect)
    }
  }, [])

  return <SocketContext.Provider value={connection}>
    {children}
  </SocketContext.Provider>
}


export default SocketProvider

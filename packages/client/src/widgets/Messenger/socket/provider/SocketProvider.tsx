import { io, Socket } from 'socket.io-client'
import appConfig from 'app/config/config'
import { DevGlobalVars } from 'dev/components'
import SocketContext from 'widgets/Messenger/socket/provider/SocketContext'
import { CFC } from 'shared/types/components'
import { useSelector } from 'shared/types/redux'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthSelectors } from 'widgets/Login'
import { useFilteredEffect } from 'shared/lib/hooks'
import { SocketPaths } from 'app/config/globals'

const SocketProvider: CFC = ({ children }) => {
  const userId = useSelector(AuthSelectors.userId) as number
  const router = useRouter()
  const [socket, setSocket] = useState<Socket>()

  useFilteredEffect(() => {
    socket?.disconnect?.()

    const connectionOptions = {
      auth: { userid: userId.toString?.() },
      path: SocketPaths.messenger
    }

    const connection = io(`${appConfig.WEBSOCKET_URL}`, connectionOptions)

    DevGlobalVars.setSocket('messenger', connection)
    setSocket(connection)
  }, [userId])


  const disconnect = () => {
    socket?.disconnect?.()
  }

  useEffect(() => {
    router.events.on('routeChangeStart', disconnect)
    return () => {
      router.events.off('routeChangeStart', disconnect)
    }
  }, [socket])

  return socket ? <SocketContext.Provider value={socket}>
    {children}
  </SocketContext.Provider> : null
}


export default SocketProvider

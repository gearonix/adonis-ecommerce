import { io } from 'socket.io-client'
import appConfig from 'app/config/config'
import { DevGlobalVars } from 'dev/components'
import SocketContext from 'widgets/Messenger/socket/SocketContext'
import { CFC } from 'shared/types/components'
import { SocketGateWays } from 'app/config/globals'

const SocketProvider: CFC = ({ children }) => {
  const connection = io(`${appConfig.WEBSOCKET_URL}/${SocketGateWays.MESSENGER}`, { withCredentials: true })

  DevGlobalVars.setSocket('messenger', connection)

  return <SocketContext.Provider value={connection}>
    {children}
  </SocketContext.Provider>
}


export default SocketProvider

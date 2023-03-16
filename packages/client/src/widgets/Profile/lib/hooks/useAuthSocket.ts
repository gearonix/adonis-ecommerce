import createAuthSocketApi from 'widgets/Profile/socket/createSocketApi'
import { useContext } from 'react'
import { AuthSocketContext } from 'app/providers/Authorization/socket'

export const useAuthSocket = () => {
  const socket = useContext(AuthSocketContext)

  return createAuthSocketApi(socket)
}

import createAuthSocketApi from 'widgets/Profile/socket/createSocketApi'
import { useSocket } from 'shared/lib/hooks'
import { Helpers } from 'shared/lib/helpers'

export const useAuthSocket = () => {
  const helpers = new Helpers()
  const socket = useSocket('auth')
  const socketApi = createAuthSocketApi(socket)

  return socketApi
}

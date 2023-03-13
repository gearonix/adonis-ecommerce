import { useSocket } from 'shared/lib/hooks'
import createMessengerSocketApi from 'widgets/Messenger/socket/createSocketApi'

export const useMessengerSocket = () => {
  const socket = useSocket('messenger')
  return createMessengerSocketApi(socket)
}

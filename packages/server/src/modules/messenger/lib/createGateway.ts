import { SocketPaths } from '@app/types/global'

export const createGateway = (path: SocketPaths) => ({
  cors: true,
  transports: ['websocket', 'polling'],
  path
})

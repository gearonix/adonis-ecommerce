import { SocketGateWays } from '@app/types/global'
import { corsConfig } from '@app/config'

export const createGateway = (gateway: SocketGateWays) => ({
  namespace: gateway,
  cors: corsConfig,
  cookie: true
})

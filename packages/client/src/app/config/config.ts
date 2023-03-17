import * as process from 'process'
import { routes } from 'shared/config/consts/routes'

const appConfig = {
  SERVER_URL: process.env.SERVER_URL || 'http://localhost:6868',
  forbiddenPaths: {
    unauthorized: [routes.MESSENGER, routes.SAVED],
    authorized: [routes.LOGIN, routes.SIGNUP_CUSTOMER, routes.SIGNUP_SALESMAN, routes.SIGNUP]
  },
  WEBSOCKET_URL: process.env.WEBSOCKET_URL || 'http://localhost:9090'
}


export default appConfig

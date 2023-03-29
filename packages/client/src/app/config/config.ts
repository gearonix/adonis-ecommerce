import * as process from 'process'
import { routes } from 'shared/config/consts/routes'

const appConfig = {
  SERVER_URL: process.env.SERVER_URL || 'http://localhost:6868',
  forbiddenPaths: {
    unauthorized: [routes.MESSENGER, routes.SAVED],
    authorized: [routes.LOGIN, routes.SIGNUP_CUSTOMER, routes.SIGNUP_SALESMAN, routes.SIGNUP]
  },
  WEBSOCKET_URL: process.env.WEBSOCKET_URL,
  PUBLIC_FOLDER: process.env.PUBLIC_FOLDER,
  BASE_PATH: process.env.BASE_PATH,
  isDev: process.env.IS_DEV
}


export default appConfig

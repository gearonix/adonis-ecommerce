import * as process from 'process'
import { routes } from 'shared/config/consts/routes'

const appConfig = {
  SERVER_URL: process.env.SERVER_URL,
  forbiddenPaths: {
    unauthorized: [routes.USERS, routes.MESSENGER, routes.SAVED],
    authorized: [routes.LOGIN, routes.SIGNUP_CUSTOMER, routes.SIGNUP_SALESMAN, routes.SIGNUP]
  }
}


export default appConfig

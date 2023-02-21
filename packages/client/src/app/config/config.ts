import * as process from 'process'
import {routes} from 'shared/config/routes'

const appConfig = {
  SERVER_URL: process.env.SERVER_URL,
  privatePaths: {
    unauthorized: [routes.PROFILE, routes.MESSENGER],
    authorized: [routes.LOGIN, routes.SIGNUP_CUSTOMER, routes.SIGNUP_SALESMAN, routes.SIGNUP],
  },
}


export default appConfig

import * as process from 'process'
import {Routes} from 'shared/config/routes'

const appConfig = {
  SERVER_URL: process.env.SERVER_URL,
  privatePaths: {
    unauthorized: [Routes.PROFILE, Routes.MESSENGER],
    authorized: [Routes.LOGIN, Routes.SIGNUP_CUSTOMER, Routes.SIGNUP_SALESMAN, Routes.SIGNUP],
  },
}


export default appConfig

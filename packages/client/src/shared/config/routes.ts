import {AppRoutes} from 'app/config/globals'

export const Routes : Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.SEARCH]: '/search',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.SIGNUP]: '/signup',
  [AppRoutes.SIGNUP_CUSTOMER]: '/signup/customer',
  [AppRoutes.SIGNUP_SALESMAN]: '/signup/salesman',
  [AppRoutes.MESSENGER]: '/messenger',
  [AppRoutes.SAVED]: '/saved',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ABOUT]: '/about',
}

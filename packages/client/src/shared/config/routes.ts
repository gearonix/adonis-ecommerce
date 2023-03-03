import {AppRoutes} from 'app/config/globals'
import {ValueOf} from 'shared/types/common'

export const routes : Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.SEARCH]: '/search',
  [AppRoutes.PRODUCT]: '/search/[id]',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.SIGNUP]: '/signup',
  [AppRoutes.SIGNUP_CUSTOMER]: '/signup/customer',
  [AppRoutes.SIGNUP_SALESMAN]: '/signup/salesman',
  [AppRoutes.MESSENGER]: '/messenger',
  [AppRoutes.SAVED]: '/saved',
  [AppRoutes.USERS]: '/users',
  [AppRoutes.USERS_ID]: '/users/[id]',
  [AppRoutes.ABOUT]: '/about',
}

export type Routes = ValueOf<typeof routes>

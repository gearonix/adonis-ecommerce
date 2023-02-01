export enum Paths {
    MAIN = '/',
    SEARCH = '/search',
    CART = '/cart',
    LOGIN = '/login',
    SIGNUP = '/signup',
    SIGNUP_CUSTOMER = '/signup/customer',
    SIGNUP_SALESMAN = '/signup/salesman',
    MESSENGER = '/messenger',
    SAVED = '/saved',
    PROFILE = '/profile',
    ABOUT = '/about',
}

export const privatePaths = [Paths.PROFILE, Paths.MESSENGER]

export enum Roles {
    SALESMAN = 'SALESMAN',
    CUSTOMER = 'CUSTOMER'
}

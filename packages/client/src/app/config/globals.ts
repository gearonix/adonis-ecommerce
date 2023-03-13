export enum AppRoutes {
    MAIN = 'MAIN',
    SEARCH = 'SEARCH',
    CART = 'CART',
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    SIGNUP_CUSTOMER = 'SIGNUP_CUSTOMER',
    SIGNUP_SALESMAN = 'SIGNUP_SALESMAN',
    MESSENGER = 'MESSENGER',
    SAVED = 'SAVED',
    USERS = 'USERS',
    USERS_ID = 'USERS_ID',
    ABOUT = 'ABOUT',
    PRODUCT = 'PRODUCT'
}


export enum UserRoles {
    SALESMAN = 'SALESMAN',
    CUSTOMER = 'CUSTOMER'
}


export enum Exceptions {
    USER_NOT_EXIST = 'This user does not exist',
    INCORRECT_PASSWORD = 'Incorrect email or password',
    USER_ALREADY_EXISTS = 'User with this email already exists',
    NOT_AUTHORIZED = 'User not authorized',
    NO_COOKIE = 'No cookie',
    INCORRECT_TOKEN = 'Incorrect token',
    NO_TOKEN = 'Headers does not contain a token',
    LOGIN_FAILED = 'Login failed',
    REGISTRATION_FAILED = 'Registration failed'
}


export enum UploadProperties{
    USER_AVATAR = 'avatar',
    USER_BACKGROUND = 'user_background',
    PRODUCT_IMAGES = 'product_images',
    POST_IMAGES = 'post_images',
}

export enum SocketGateWays{
    messenger = 'messenger',
    auth = 'auth'
}

export const PAGE_LIMIT = 6 as const

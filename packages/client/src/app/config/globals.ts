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
    PROFILE = 'PROFILE',
    ABOUT = 'ABOUT',
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
    USER_BACKGROUND = 'user_background'
}


export enum AppMethods{
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

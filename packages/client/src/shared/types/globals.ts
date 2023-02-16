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

export enum Roles {
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

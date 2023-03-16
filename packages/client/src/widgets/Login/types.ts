import { UserRoles } from 'app/config/globals'
import { AxiosResponse as Res } from 'shared/types/common'
import { User } from 'widgets/Profile'

export interface LoginForm {
    email: string,
    password: string
}

export interface SignupForm extends LoginForm {
    repeatPassword: string,
    firstName?: string,
    lastName?: string
}

export interface SignupWithRoles extends SignupForm {
    role: UserRoles
}


export type Forms = LoginForm | SignupForm


export interface GoogleButtonProps {
    role?: UserRoles
}

export interface RegisterByGoogle {
    jwt: string,
    role: UserRoles
}

type Token = Res<{ token: string }>

export interface AuthApi {
    loginUser(formValues: LoginForm): Token,

    getCurrentUser(): Res<User>,

    registerUser(formValues: SignupWithRoles): Token,

    clearAuthToken(): Res<any>,

    registerUserByGoogle(data: RegisterByGoogle): Token,

    loginUserByGoogle(jwt: string): Token
}

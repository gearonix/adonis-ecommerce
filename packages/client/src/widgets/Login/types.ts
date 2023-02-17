import {UserRoles} from 'app/config/globals'

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

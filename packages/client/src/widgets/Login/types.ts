import {Roles} from "shared/types/globals"

export interface LoginForm {
    email: string,
    password: string
}

export interface SignupForm extends LoginForm {
    repeatPassword: string,
    first_name?: string,
    last_name?: string
}

export interface SignupWithRoles extends SignupForm {
    role: Roles
}


export type Forms = LoginForm | SignupForm



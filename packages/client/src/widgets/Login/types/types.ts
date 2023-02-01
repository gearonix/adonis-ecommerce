export interface LoginFormValues {
    email: string,
    password: string
}

export interface CustomerFormValues extends LoginFormValues {
    repeatPassword: string
}

import * as Yup from "yup";
import {createEmailField, createField, createRepeatPassword} from "shared/helpers/others";
import {LoginForm, SignupForm} from '../types'


const formTemplate = {
    email: createEmailField(),
    password: createField('Password', 8, 16)
}

export const loginSchema: Yup.SchemaOf<LoginForm> = Yup.object().shape(formTemplate)

//@ts-ignore
export const customerSchema: Yup.SchemaOf<SignupForm> = Yup.object().shape({
    ...formTemplate,
    repeatPassword: createRepeatPassword()
})

export const salesmanSchema = Yup.object().shape({
    ...formTemplate,
    first_name: createField('Name'),
    last_name: createField('Surname'),
    repeatPassword: createRepeatPassword()
})

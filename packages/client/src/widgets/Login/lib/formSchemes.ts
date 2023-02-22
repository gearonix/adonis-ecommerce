import * as Yup from 'yup'
import {LoginForm, SignupForm} from '../types'
import {FieldCreator} from 'shared/lib/helpers/others'

const creator = new FieldCreator()

const formTemplate = {
  email: creator.email(),
  password: creator.field('Password', 8, 16),
}

export const loginSchema: Yup.SchemaOf<LoginForm> = Yup.object().shape(formTemplate)

// @ts-ignore
export const customerSchema: Yup.SchemaOf<SignupForm> = Yup.object().shape({
  ...formTemplate,
  repeatPassword: creator.password(),
})

export const salesmanSchema = Yup.object().shape({
  ...formTemplate,
  firstName: creator.field('Name'),
  lastName: creator.field('Surname'),
  repeatPassword: creator.password(),
})

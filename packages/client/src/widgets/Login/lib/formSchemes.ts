import { FieldCreator } from 'shared/lib/helpers'
import * as Yup from 'yup'
import { LoginForm, SignupForm } from '../types'

const creator = new FieldCreator()

const formTemplate = {
  email: creator.email(),
  password: creator.field('Password', 8, 16)
}

export const loginSchema: Yup.SchemaOf<LoginForm> = Yup.object().shape(formTemplate)

export const customerSchema = Yup.object().shape({
  ...formTemplate,
  repeatPassword: creator.password()
})

export const salesmanSchema = Yup.object().shape({
  ...formTemplate,
  firstName: creator.field('Name'),
  lastName: creator.field('Surname'),
  repeatPassword: creator.password()
})

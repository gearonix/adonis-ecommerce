import { FC } from 'react'
import { HeadField } from 'shared/ui/material'
import { SignupForm } from '../types'
import { customerSchema } from '../lib/formSchemes'
import { useSubmitForm } from '../lib/hooks'
import { UserRoles } from 'app/config/globals'
import GoogleButton from './GoogleButton'
import { useForm } from 'shared/lib/hooks/useForm'
import { AuthTemplate } from 'entities/Auth'

const CustomerForm: FC = () => {
  const { form, reg } = useForm<SignupForm>(customerSchema)
  const onSubmit = useSubmitForm(form.setError, UserRoles.CUSTOMER)

  return <AuthTemplate submit={form.handleSubmit(onSubmit)} GoogleButton={GoogleButton}
    role={UserRoles.CUSTOMER}>
    <HeadField title={'Email'} values={reg('email')}/>
    <HeadField title={'Password'} isPassword values={reg('password')}/>
    <HeadField title={'Repeat password'} isPassword values={reg('repeatPassword')}/>
  </AuthTemplate>
}

export default CustomerForm

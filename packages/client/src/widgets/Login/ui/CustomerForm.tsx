import {FC} from 'react'
import {AuthTemplate} from 'entities/Auth/AuthTemplate'
import {HeadField} from 'shared/ui/mui'
import {useForm} from 'react-hook-form'
import {SignupForm} from '../types'
import {yupResolver} from '@hookform/resolvers/yup'
import {customerSchema} from '../lib/formSchemes'
import {useSubmitForm} from '../lib/hooks'
import {UserRoles} from 'app/config/globals'
import GoogleButton from './GoogleButton'
import {createFieldValues} from 'shared/lib/helpers/others/formHelpers'

const CustomerForm: FC = () => {
  const form = useForm<SignupForm>({resolver: yupResolver(customerSchema)})
  const onSubmit = useSubmitForm(form.setError, UserRoles.CUSTOMER)
  const reg = createFieldValues(form)


  return <AuthTemplate submit={form.handleSubmit(onSubmit)} GoogleButton={GoogleButton}
    role={UserRoles.CUSTOMER}>
    <HeadField title={'Email'} values={reg('email')}/>
    <HeadField title={'Password'} isPassword values={reg('password')}/>
    <HeadField title={'Repeat password'} isPassword values={reg('repeatPassword')}/>
  </AuthTemplate>
}

export default CustomerForm

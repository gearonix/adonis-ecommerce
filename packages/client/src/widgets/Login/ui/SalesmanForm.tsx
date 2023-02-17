import {FC} from 'react'
import {AuthTemplate} from 'entities/Auth/AuthTemplate'
import {HeadField} from 'shared/ui/mui'
import {useForm} from 'react-hook-form'
import {SignupForm} from '../types'
import {yupResolver} from '@hookform/resolvers/yup'
import {salesmanSchema} from '../lib/formSchemes'
import {useSubmitForm} from '../lib/hooks'
import {UserRoles} from 'app/config/globals'
import GoogleButton from 'widgets/Login/ui/GoogleButton'
import {createFieldValues} from 'shared/lib/helpers/others/formHelpers'

const SalesmanForm: FC = () => {
  const form = useForm<SignupForm>({resolver: yupResolver(salesmanSchema)})
  const onSubmit = useSubmitForm(form.setError, UserRoles.SALESMAN)
  const reg = createFieldValues(form)

  return <AuthTemplate submit={form.handleSubmit(onSubmit)}
    GoogleButton={GoogleButton} role={UserRoles.SALESMAN}>
    <HeadField title={'Name'} values={reg('firstName')}/>
    <HeadField title={'Surname'} values={reg('lastName')}/>
    <HeadField title={'Email'} values={reg('email')}/>
    <HeadField title={'Password'} isPassword values={reg('password')}/>
    <HeadField title={'Repeat password'} isPassword values={reg('repeatPassword')}/>
  </AuthTemplate>
}

export default SalesmanForm

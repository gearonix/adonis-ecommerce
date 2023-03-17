import { FC, memo } from 'react'
import { AuthTemplate } from 'entities/Auth'
import { HeadField } from 'shared/ui/material'
import { useForm } from 'react-hook-form'
import { SignupForm } from '../types'
import { yupResolver } from '@hookform/resolvers/yup'
import { salesmanSchema } from '../lib/formSchemes'
import { useSubmitForm } from '../lib/hooks'
import { UserRoles } from 'app/config/globals'
import GoogleButton from 'widgets/Login/ui/GoogleButton'
import { createFieldValues } from 'shared/lib/helpers/formHelpers/createFieldValues'
import { useTranslation } from 'react-i18next'

const SalesmanForm: FC = memo(() => {
  const form = useForm<SignupForm>({ resolver: yupResolver(salesmanSchema) })
  const onSubmit = useSubmitForm(form.setError, UserRoles.SALESMAN)
  const reg = createFieldValues(form)
  const { t } = useTranslation()

  return <AuthTemplate submit={form.handleSubmit(onSubmit)}
    GoogleButton={GoogleButton} role={UserRoles.SALESMAN}>
    <HeadField title={t('Name')} values={reg('firstName')}/>
    <HeadField title={t('Surname')} values={reg('lastName')}/>
    <HeadField title={t('Email')} values={reg('email')}/>
    <HeadField title={t('Password')} isPassword values={reg('password')}/>
    <HeadField title={t('Repeat_password')} isPassword values={reg('repeatPassword')}/>
  </AuthTemplate>
})

export default SalesmanForm

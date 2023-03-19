import { FC, memo } from 'react'
import { HeadField } from 'shared/ui/material'
import { useForm } from 'react-hook-form'
import { LoginForm as LoginFormI } from '../types'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../lib/formSchemes'
import { useSubmitForm } from '../lib/hooks'
import GoogleButton from './GoogleButton'
import { createFieldValues } from 'shared/lib/helpers/formHelpers/createFieldValues'
import { AuthTemplate } from 'entities/Auth'
import { useTranslation } from 'react-i18next'

const LoginForm = memo(() => {
  const form = useForm<LoginFormI>({ resolver: yupResolver(loginSchema) })
  const onSubmit = useSubmitForm(form.setError)
  const reg = createFieldValues<LoginFormI>(form)
  const { t } = useTranslation()

  return <AuthTemplate submit={form.handleSubmit(onSubmit)} GoogleButton={GoogleButton}>
    <HeadField title={t('Email')} values={reg('email')}/>
    <HeadField title={t('Password')} isPassword values={reg('password')}/>
  </AuthTemplate>
})

export default LoginForm

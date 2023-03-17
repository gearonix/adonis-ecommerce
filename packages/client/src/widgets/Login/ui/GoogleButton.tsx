import { FC, memo } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { registerByGoogle } from '../store/thunks/makeRegistration/makeRegistration'
import { useDispatch } from 'shared/types/redux'
import { loginByGoogle } from '../store/thunks/loginUser/loginUser'
import { GoogleButtonProps, RegisterByGoogle } from '../types'
import { Theme } from 'shared/config/consts/themes'
import { useTheme } from 'shared/lib/hooks/useTheme'

const GoogleButton = memo<GoogleButtonProps>(({ role }) => {
  const dispatch = useDispatch()
  const { theme } = useTheme()
  const onSuccess = async ({ credential }: CredentialResponse) => {
    if (role) {
      dispatch(registerByGoogle({ jwt: credential, role } as RegisterByGoogle))
    } else {
      dispatch(loginByGoogle(credential as string))
    }
  }
  const onError = () => console.error('Login by google failed.')

  return <GoogleLogin
    onSuccess={onSuccess}
    onError={onError}
    size={'large'}
    width={'310'}
    theme={theme === Theme.LIGHT ? undefined : 'filled_black'}
  />
})

export default GoogleButton

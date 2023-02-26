import {FC} from 'react'
import {CredentialResponse, GoogleLogin} from '@react-oauth/google'
import {registerByGoogle} from '../redux/thunks/makeRegistration'
import {useDispatch} from 'shared/types/redux'
import {loginByGoogle} from '../redux/thunks/loginUser'
import {GoogleButtonProps, RegisterByGoogle} from '../types'
import {useTheme} from 'shared/lib/helpers/hooks/common'
import {Theme} from 'shared/config/themes'

const GoogleButton: FC<GoogleButtonProps> = ({role}) => {
  const dispatch = useDispatch()
  const {theme} = useTheme()
  const onSuccess = async ({credential}: CredentialResponse) => {
    if (role) {
      dispatch(registerByGoogle({jwt: credential, role} as RegisterByGoogle))
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
}

export default GoogleButton

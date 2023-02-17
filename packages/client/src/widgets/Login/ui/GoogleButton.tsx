import {FC} from 'react'
import {CredentialResponse, GoogleLogin} from '@react-oauth/google'
import {registerByGoogle} from '../thunks/makeRegistration'
import {useDispatch} from 'shared/types/redux'
import {loginByGoogle} from '../thunks/loginUser'
import {GoogleButtonProps, RegisterByGoogle} from '../types'

const GoogleButton: FC<GoogleButtonProps> = ({role}) => {
  const dispatch = useDispatch()
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
  />
}

export default GoogleButton

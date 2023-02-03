import {FC} from 'react';
import {CredentialResponse, GoogleLogin} from '@react-oauth/google';
import {registerByGoogle} from "widgets/Login/store/thunks/makeRegistration";
import {useDispatch} from 'shared/types/redux';
import {loginByGoogle} from "widgets/Login/store/thunks/loginUser";

const GoogleButton: FC<{ mode: 'login' | 'signup' }> = ({mode}) => {
    const dispatch = useDispatch()

    const onSuccess = async ({credential}: CredentialResponse) => {
        if (mode === 'signup') {
            dispatch(registerByGoogle(credential as string))
        } else {
            dispatch(loginByGoogle(credential as string))
        }
    }

    const onError = () => console.error('Login by google failed.')

    return <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
    />
}

export default GoogleButton

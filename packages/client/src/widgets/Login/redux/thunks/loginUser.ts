import {createThunk} from 'shared/types/redux'
import {LoginForm} from 'widgets/Login/types'
import LoginApi from '../../authApi'
import {isResponseError} from 'shared/lib/helpers/others/httpHelpers'
import {Exceptions} from 'app/config/globals'
import {authorizeUser} from 'widgets/Login/redux/thunks/authorizeUser'

export const loginUser = createThunk(
    'users/LOGIN_USER',
    async (formValues: LoginForm, {dispatch, rejectWithValue}) => {
      const response = await LoginApi.loginUser(formValues)

      if (isResponseError(response)) return rejectWithValue(Exceptions.INCORRECT_PASSWORD)

      await dispatch(authorizeUser())
    }
)


export const loginByGoogle = createThunk(
    'users/LOGIN_BY_GOOGLE',
    async (jwt: string, {dispatch, rejectWithValue}) => {
      const response = await LoginApi.loginUserByGoogle(jwt)

      if (isResponseError(response)) return rejectWithValue(Exceptions.LOGIN_FAILED)

      await dispatch(authorizeUser())
    }
)

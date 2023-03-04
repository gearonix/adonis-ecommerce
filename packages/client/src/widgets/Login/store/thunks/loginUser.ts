import { createThunk } from 'shared/types/redux'
import { LoginForm } from 'widgets/Login/types'
import LoginApi from '../../api'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { Exceptions } from 'app/config/globals'
import { authorizeUser } from 'widgets/Login/store/thunks/authorizeUser'

export const loginUser = createThunk(
    'users/LOGIN_USER',
    async (formValues: LoginForm, { dispatch, rejectWithValue, extra }) => {
      const response = await extra.api.auth.loginUser(formValues)

      if (isError(response)) return rejectWithValue(Exceptions.INCORRECT_PASSWORD)

      await dispatch(authorizeUser())
    }
)


export const loginByGoogle = createThunk(
    'users/LOGIN_BY_GOOGLE',
    async (jwt: string, { dispatch, rejectWithValue, extra }) => {
      const response = await extra.api.auth.loginUserByGoogle(jwt)

      if (isError(response)) return rejectWithValue(Exceptions.LOGIN_FAILED)

      await dispatch(authorizeUser())
    }
)

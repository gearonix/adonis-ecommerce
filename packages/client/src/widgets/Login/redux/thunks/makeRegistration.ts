import {createThunk} from 'shared/types/redux'
import {RegisterByGoogle, SignupWithRoles} from 'widgets/Login/types'
import LoginApi from 'widgets/Login/authApi'
import {isResponseError} from 'shared/lib/helpers/others/httpHelpers'
import {Exceptions} from 'app/config/globals'
import {authorizeUser} from 'widgets/Login/redux/thunks/authorizeUser'

export const makeRegistration = createThunk(
    'users/MAKE_REGISTRATION',
    async (data: SignupWithRoles, {dispatch, rejectWithValue}) => {
      const response = await LoginApi.registerUser(data)

      if (isResponseError(response)) return rejectWithValue(Exceptions.USER_ALREADY_EXISTS)

      await dispatch(authorizeUser())
    }
)


export const registerByGoogle = createThunk(
    'users/MAKE_REGISTRATION_BY_GOOGLE',
    async (data: RegisterByGoogle, {dispatch, rejectWithValue}) => {
      const response = await LoginApi.registerUserByGoogle(data)

      if (isResponseError(response)) return rejectWithValue(Exceptions.REGISTRATION_FAILED)

      await dispatch(authorizeUser())
    }
)

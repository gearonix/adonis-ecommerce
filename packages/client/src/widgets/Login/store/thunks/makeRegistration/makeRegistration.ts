import { createThunk } from 'shared/types/redux'
import { RegisterByGoogle, SignupWithRoles } from 'widgets/Login/types'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { Exceptions } from 'app/config/globals'
import { authorizeUser } from 'widgets/Login/store/thunks/autorizeUser/authorizeUser'

export const makeRegistration = createThunk(
    'profile/MAKE_REGISTRATION',
    async (data: SignupWithRoles, { dispatch, rejectWithValue, extra }) => {
      const response = await extra.api.auth.registerUser(data)

      if (isError(response)) return rejectWithValue(Exceptions.USER_ALREADY_EXISTS)

      await dispatch(authorizeUser())
    }
)


export const registerByGoogle = createThunk(
    'profile/MAKE_REGISTRATION_BY_GOOGLE',
    async (data: RegisterByGoogle, { dispatch, rejectWithValue, extra }) => {
      const response = await extra.api.auth.registerUserByGoogle(data)

      if (isError(response)) return rejectWithValue(Exceptions.REGISTRATION_FAILED)

      await dispatch(authorizeUser())
    }
)

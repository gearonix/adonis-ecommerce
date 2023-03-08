import { createThunk } from 'shared/types/redux'
import { authActions } from 'widgets/Login/store/authReducer'
import { isError as isError } from 'shared/lib/helpers/others/httpHelpers'
import { getSavedProducts } from 'features/Saved/store/thunks'

export const authorizeUser = createThunk(
    'users/AUTHORIZE_USER',
    async (_, { dispatch, extra, rejectWithValue }) => {
      const response = await extra.api.auth.getCurrentUser()
      const user = response.data

      if (!user || isError(response)) {
        dispatch(authActions.authorizationFailed())
        return rejectWithValue('Please sign in')
      }

      dispatch(authActions.authorizeUser(user))
      dispatch(getSavedProducts())
    }
)

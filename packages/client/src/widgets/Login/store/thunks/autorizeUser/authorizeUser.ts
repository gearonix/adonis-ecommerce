import { createThunk } from 'shared/types/redux'
import { authActions } from 'widgets/Login/store/slice/authReducer'
import { isError as isError } from 'shared/lib/helpers/others/httpHelpers'
import { getSavedProducts } from 'features/Saved/store/thunks'
import { LocalStorage } from 'shared/config/consts/others'
import axiosInstance from 'shared/config/consts/axios'

export const authorizeUser = createThunk(
    'profile/AUTHORIZE_USER',
    async (token: string | undefined, { dispatch, extra, rejectWithValue }) => {
      const receivedToken = token || extra.storage?.get(LocalStorage.AUTH_TOKEN)
      if (!receivedToken) {
        dispatch(authActions.authorizationFailed())
        return rejectWithValue('Please sign in')
      }

      extra.storage?.set(LocalStorage.AUTH_TOKEN, receivedToken)
      axiosInstance.defaults.headers.common['authorization'] = `Bearer ${receivedToken}`
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

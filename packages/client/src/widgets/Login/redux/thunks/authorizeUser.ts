import {createThunk} from 'shared/types/redux'
import LoginApi from '../../authApi'
import {authActions} from 'widgets/Login/redux/authReducer'
import {isResponseError as isError} from 'shared/lib/helpers/others/httpHelpers'
import {getSavedProducts} from 'features/Saved/store/thunks'

export const authorizeUser = createThunk(
    'users/AUTHORIZE_USER',
    async (_, {dispatch}) => {
      const response = await LoginApi.getCurrentUser()
      const user = response.data

      if (!user || isError(response)) {
        return dispatch(authActions.authorizationFailed())
      }

      dispatch(authActions.authorizeUser(user))
      dispatch(getSavedProducts())
    }
)

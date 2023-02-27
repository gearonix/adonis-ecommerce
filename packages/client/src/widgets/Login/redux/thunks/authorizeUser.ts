import {createThunk} from 'shared/types/redux'
import LoginApi from '../../authApi'
import {authActions} from 'widgets/Login/redux/authReducer'
import {isResponseError as isError} from 'shared/lib/helpers/others/httpHelpers'

export const authorizeUser = createThunk(
    'users/AUTHORIZE_USER',
    async (_, {dispatch}) => {
      const response = await LoginApi.getCurrentUser()
      const user = response.data

      if (!user || isError(response)) {
        dispatch(authActions.authorizationFailed())
        return
      }

      dispatch(authActions.authorizeUser(user))
    }
)

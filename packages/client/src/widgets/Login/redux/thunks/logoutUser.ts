import {createThunk} from 'shared/types/redux'
import authApi from 'widgets/Login/authApi'
import {userActions} from 'widgets/Profile'
import {authActions} from 'widgets/Login/redux/authReducer'

export const logoutUser = createThunk(
    'users/LOGOUT_USER',
    async (_, {dispatch}) => {
      await authApi.clearAuthToken()
      dispatch(userActions.clearUser())
      dispatch(authActions.logout())
    }
)

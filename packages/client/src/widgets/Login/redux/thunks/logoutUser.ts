import {createThunk} from 'shared/types/redux'
import authApi from 'widgets/Login/authApi'
import {userActions} from 'widgets/Profile'
import {authActions} from 'widgets/Login/redux/authReducer'
import {LocalStorageHelper} from 'shared/lib/helpers/others/localStorageHelpers'
import {cartActions} from 'widgets/Cart/store/cartReducer'

const storage = new LocalStorageHelper()

export const logoutUser = createThunk(
    'users/LOGOUT_USER',
    async (_, {dispatch}) => {
      await authApi.clearAuthToken()
      dispatch(userActions.clearUser())
      dispatch(authActions.logout())
      dispatch(cartActions.removeAll())
      storage.clear()
    }
)

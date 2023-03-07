import { createThunk } from 'shared/types/redux'
import authApi from 'widgets/Login/api'
import { userActions } from 'widgets/Profile'
import { authActions } from 'widgets/Login/store/authReducer'
import { LocalStorageHelper } from 'shared/lib/helpers/others/localStorageHelpers'
import { cartActions } from 'widgets/Cart/store/cartReducer'
import { routes } from 'shared/config/consts/routes'

const storage = new LocalStorageHelper()

export const logoutUser = createThunk(
    'users/LOGOUT_USER',
    async (_, { dispatch, extra }) => {
      await extra.api.auth.clearAuthToken()
      dispatch(userActions.clearUser())
      dispatch(authActions.logout())
      dispatch(cartActions.removeAll())
      storage.clear()
      extra.redirect(routes.LOGIN)
    }
)

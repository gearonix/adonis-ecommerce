import {createThunk} from 'shared/types/redux'
import LoginApi from '../authApi'
import {userActions} from 'widgets/Profile'

export const getCurrentUser = createThunk(
    'users/GET_USER_DATA',
    async (_, {dispatch}) => {
      const {data: user} = await LoginApi.getCurrentUser()

      if (!user) return
      dispatch(userActions.setUser(user))
    }
)

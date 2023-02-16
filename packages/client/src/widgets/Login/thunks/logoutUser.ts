import {createThunk} from 'shared/types/redux';
import authApi from 'widgets/Login/authApi';
import {userActions} from 'widgets/Profile';

export const logoutUser = createThunk(
    'users/LOGOUT_USER',
    async (_, {dispatch}) => {
      await authApi.clearAuthToken();
      dispatch(userActions.clearUser());
    }
);

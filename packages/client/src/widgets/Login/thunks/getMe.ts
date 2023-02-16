import {createThunk} from 'shared/types/redux';
import LoginApi from '../authApi';
import {userActions} from 'widgets/Profile';

export const getMe = createThunk(
    'users/GET_USER_DATA',
    async (token: string, {dispatch}) => {
      const {data: user} = await LoginApi.getMe(token);

      if (!user) return;
      dispatch(userActions.setUser(user));
    }
);

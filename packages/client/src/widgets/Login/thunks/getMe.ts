import {createThunk} from 'shared/types/redux';
import LoginApi from '../authApi';
import {setUser} from 'widgets/Profile/store/userReducer';

export const getMe = createThunk(
    'users/GET_USER_DATA',
    async (token: string, {dispatch}) => {
        const {data: user} = await LoginApi.getMe(token);

        if (!user) return;
        dispatch(setUser(user));
    }
);

import {createThunk} from 'shared/types/redux';
import LoginApi from '../authApi';
import {isResponseError} from 'shared/helpers/helpers';
import {getMe} from './getMe';

export const authByCookie = createThunk(
    'users/GET_TOKEN',
    async (_, {dispatch}) => {
        const response = await LoginApi.authByCookie();

        console.log(response)

        if (isResponseError(response)) return;

        await dispatch(getMe(response.data.token))
    }
);

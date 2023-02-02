import {createThunk} from "shared/types/redux";
import {LoginForm} from "widgets/Login/types";
import LoginApi from '../../authApi'
import {setUser} from "widgets/Profile/store/userReducer";
import {isError} from "shared/helpers/helpers";
import {Exceptions} from "shared/types/globals";

export const loginUser = createThunk(
    'users/LOGIN_USER',
    async (formValues: LoginForm, {dispatch, rejectWithValue}) => {
            const response = await LoginApi.loginUser(formValues)

            if (isError(response)) return rejectWithValue(Exceptions.INCORRECT_PASSWORD)
            const {token} = response.data


            const {data: user} = await LoginApi.getMe(token)

            dispatch(setUser(user))

    }
)

import {createThunk} from "shared/types/redux";
import {LoginForm} from "widgets/Login/types";
import LoginApi from '../../api'
import {HttpStatusCode} from "axios";
import {setUser} from "widgets/Profile/store/userReducer";

export const loginUser = createThunk(
    'users/LOGIN_USER',
    async (formValues: LoginForm, {dispatch}) => {
        const response = await LoginApi.loginUser(formValues)

        if (response.status == HttpStatusCode.BadRequest) {
            throw new Error('Login failed')
        }
        const {token} = response.data


        const {data: user} = await LoginApi.getMe(token)

        dispatch(setUser(user))

    }
)

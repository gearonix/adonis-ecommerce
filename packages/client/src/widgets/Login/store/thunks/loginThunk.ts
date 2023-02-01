import {createThunk} from "shared/config/types/redux";
import {LoginFormValues} from "widgets/Login/types/types";
import LoginApi from '../../api'
import {HttpStatusCode} from "axios";
import {setUser} from "widgets/Profile/store/userSlice";

export const loginUser = createThunk(
    'users/LOGIN_USER',
    async (formValues: LoginFormValues, {dispatch}) => {
        let response = await LoginApi.loginUser(formValues)

        if (response.status == HttpStatusCode.BadRequest) {
            throw new Error('Login failed')
        }
        const {token} = response.data


        const {data: user} = await LoginApi.getMe(token)

        dispatch(setUser(user))

    }
)

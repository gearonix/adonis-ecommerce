import {createThunk} from "shared/types/redux";
import {SignupWithRoles} from "widgets/Login/types";
import LoginApi from "widgets/Login/api";
import {setUser} from "widgets/Profile/store/userReducer";
import {HttpStatusCode} from "axios";

export const makeRegistration = createThunk(
    'users/MAKE_REGISTRATION',
    async (data: SignupWithRoles, {dispatch}) => {
        const response = await LoginApi.registerUser(data)

        if (response.status == HttpStatusCode.BadRequest) {
            throw new Error('Login failed')
        }
        const {token} = response.data

        const {data: user} = await LoginApi.getMe(token)

        dispatch(setUser(user))
    }
)

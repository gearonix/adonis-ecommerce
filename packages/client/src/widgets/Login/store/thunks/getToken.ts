import {createThunk} from "shared/config/types/redux";
import LoginApi from '../../api'
import {HttpStatusCode} from "axios";
import {setUser} from "widgets/Profile/store/userReducer";

export const getMe = createThunk(
    'users/GET_TOKEN',
    async (_, {dispatch}) => {
        const response = await LoginApi.authByCookie()

        if (response.status == HttpStatusCode.BadRequest) {
            throw new Error('Authorization failed')
        }
        const token = response.data.token

        const {data: user} = await LoginApi.getMe(token)

        dispatch(setUser(user))
    }
)

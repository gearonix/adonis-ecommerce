import {createThunk} from "shared/config/types/redux";
import LoginApi from '../../api'
import {HttpStatusCode} from "axios";
import {setLoading, setUser} from "widgets/Profile/store/userSlice";

export const getMe = createThunk(
    'users/GET_TOKEN',
    async (_, {dispatch}) => {
        dispatch(setLoading(true))

        const response = await LoginApi.authByCookie()

        if (response.status == HttpStatusCode.BadRequest) {
            dispatch(setLoading(false))
            throw new Error('Authorization failed')
        }
        const token = response.data.token

        const {data: user} = await LoginApi.getMe(token)

        dispatch(setUser(user))
        dispatch(setLoading(false))
    }
)

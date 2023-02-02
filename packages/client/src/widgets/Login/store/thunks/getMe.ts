import {createThunk} from "shared/types/redux";
import LoginApi from '../../authApi'
import {setUser} from "widgets/Profile/store/userReducer";
import {isError} from "shared/helpers/helpers";

export const getMe = createThunk(
    'users/GET_TOKEN',
    async (_, {dispatch}) => {
            const response = await LoginApi.authByCookie()

            if (isError(response)) return

            const token = response.data.token

            const {data: user} = await LoginApi.getMe(token)

            if (!user) return
            dispatch(setUser(user))
    }
)

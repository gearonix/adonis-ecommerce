import {createThunk} from "shared/types/redux";
import authApi from "widgets/Login/authApi";
import {clearUser} from "widgets/Profile/store/userReducer";

export const logoutUser = createThunk(
    'users/LOGOUT_USER',
    async (_, {dispatch}) => {
        await authApi.clearAuthToken()
        dispatch(clearUser())
    }
)

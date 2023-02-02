import {createThunk} from "shared/types/redux";
import {SignupWithRoles} from "widgets/Login/types";
import LoginApi from "widgets/Login/authApi";
import {setUser} from "widgets/Profile/store/userReducer";
import {isError} from "shared/helpers/helpers";
import {Exceptions} from "shared/types/globals";

export const makeRegistration = createThunk(
    'users/MAKE_REGISTRATION',
    async (data: SignupWithRoles, {dispatch, rejectWithValue}) => {
            const response = await LoginApi.registerUser(data)

            if (isError(response)) return rejectWithValue(Exceptions.USER_ALREADY_EXISTS)

            const {token} = response.data

            const {data: user} = await LoginApi.getMe(token)

            dispatch(setUser(user))
    }
)

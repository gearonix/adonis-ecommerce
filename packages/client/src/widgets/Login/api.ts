import axiosInstance from 'shared/config/axios'
import {LoginFormValues} from "widgets/Login/types/types";
import {GetToken} from "widgets/Login/types/responseTypes";
import {AxiosResponse as Res} from "shared/config/types/globals";
import {UserSlice} from "shared/config/types/slices";


const AuthApi = {
    loginUser: (formValues: LoginFormValues): Res<GetToken> => axiosInstance.post('/auth/login', formValues),
    getMe: (token: string): Res<UserSlice> => axiosInstance.get('/auth/get/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    authByCookie: (): Res<GetToken> => axiosInstance.get('/auth/get/token')
}


export default AuthApi

import axiosInstance from 'shared/config/axios'
import {LoginForm, SignupWithRoles} from "./types";
import {AxiosResponse as Res} from "shared/types/helpers";
import {UserSlice} from "shared/types/slices";


const AuthApi = {
    loginUser: (formValues: LoginForm): Res<{ token: string }> => axiosInstance.post('/auth/login', formValues),
    getMe: (token: string): Res<UserSlice> => axiosInstance.get('/auth/get/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    authByCookie: (): Res<{ token: string }> => axiosInstance.get('/auth/get/token'),
    registerUser: (formValues: SignupWithRoles): Res<{ token: string }> =>
        axiosInstance.post('/auth/registration', formValues),
    clearAuthToken: () => axiosInstance.delete('auth/delete/token'),
    registerUserByGoogle: (jwt: string) => axiosInstance.post('/auth/registration/google', {jwt}),
    loginUserByGoogle: (jwt: string) => axiosInstance.post('/auth/login/google', {jwt})
}


export default AuthApi

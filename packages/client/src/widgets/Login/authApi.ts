import axiosInstance from 'shared/config/axios';
import {LoginForm, RegisterByGoogle, SignupWithRoles} from './types';
import {AxiosResponse as Res} from 'shared/types/helpers';
import {UserSlice} from 'shared/types/slices';

type Token = Res<{ token: string }>

const AuthApi = {
    loginUser: (formValues: LoginForm): Token => axiosInstance.post('/auth/login', formValues),

    getMe: (token: string): Res<UserSlice> => axiosInstance.get('/auth/get/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    authByCookie: (): Res<{ token: string }> => axiosInstance.get('/auth/get/token'),

    registerUser: (formValues: SignupWithRoles): Token =>
        axiosInstance.post('/auth/registration', formValues),

    clearAuthToken: () => axiosInstance.delete('auth/delete/token'),

    registerUserByGoogle: (data: RegisterByGoogle): Token =>
        axiosInstance.post('/auth/registration/google', data),

    loginUserByGoogle: (jwt: string): Token => axiosInstance.post('/auth/login/google', {jwt}),
};


export default AuthApi;

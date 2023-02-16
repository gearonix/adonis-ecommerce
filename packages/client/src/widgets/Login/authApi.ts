import axiosInstance from 'shared/config/axios';
import {LoginForm, RegisterByGoogle, SignupWithRoles} from './types';
import {AxiosResponse as Res} from 'shared/types/helpers';
import {UserSlice} from 'shared/types/slices';

type Token = Res<{ token: string }>

interface AuthApi {
    loginUser(formValues: LoginForm): Token,

    getMe(token: string): Res<UserSlice>,

    authByCookie(): Token,

    registerUser(formValues: SignupWithRoles): Token,

    clearAuthToken(): Res<any>,

    registerUserByGoogle(data: RegisterByGoogle): Token,

    loginUserByGoogle(jwt: string): Token
}

const authApi: AuthApi = {
  loginUser: (formValues) => axiosInstance.post('/auth/login', formValues),

  getMe: (token) => axiosInstance.get('/auth/get/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  authByCookie: () => axiosInstance.get('/auth/get/token'),

  registerUser: (formValues) => axiosInstance.post('/auth/registration', formValues),

  clearAuthToken: () => axiosInstance.delete('auth/delete/token'),

  registerUserByGoogle: (data) => axiosInstance.post('/auth/registration/google', data),

  loginUserByGoogle: (jwt) => axiosInstance.post('/auth/login/google', {jwt}),
};


export default authApi;

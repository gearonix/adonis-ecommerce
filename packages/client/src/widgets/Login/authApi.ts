import axiosInstance from 'shared/config/axios'
import {LoginForm, RegisterByGoogle, SignupWithRoles} from './types'
import {AxiosResponse as Res} from 'shared/types/common'
import {UserSlice} from 'shared/types/slices'
import EndPoints from 'shared/config/endpoints'


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

const EndPoint = EndPoints.AUTH

const authApi: AuthApi = {
  loginUser: (formValues) => axiosInstance.post('/auth/login', formValues),

  getMe: (token) => axiosInstance.get('/auth/get/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  authByCookie: () => axiosInstance.get(EndPoint.getToken),

  registerUser: (formValues) => axiosInstance.post(EndPoint.registration, formValues),

  clearAuthToken: () => axiosInstance.delete(EndPoint.deleteToken),

  registerUserByGoogle: (data) => axiosInstance.post(EndPoint.googleRegistration, data),

  loginUserByGoogle: (jwt) => axiosInstance.post(EndPoint.googleLogin, {jwt}),
}


export default authApi

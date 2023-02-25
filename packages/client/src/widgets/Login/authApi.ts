import axiosInstance from 'shared/config/axios'
import {LoginForm, RegisterByGoogle, SignupWithRoles} from './types'
import {AxiosResponse as Res} from 'shared/types/common'
import {User} from 'shared/types/slices'
import EndPoints from 'shared/config/endpoints'


type Token = Res<{ token: string }>

interface AuthApi {
    loginUser(formValues: LoginForm): Token,

    getCurrentUser(): Res<User>,

    authByCookie(): Token,

    registerUser(formValues: SignupWithRoles): Token,

    clearAuthToken(): Res<any>,

    registerUserByGoogle(data: RegisterByGoogle): Token,

    loginUserByGoogle(jwt: string): Token
}

const EndPoint = EndPoints.AUTH

const authApi: AuthApi = {
  loginUser: (formValues) => axiosInstance.post(EndPoint.login, formValues),

  getCurrentUser: () => axiosInstance.get(EndPoint.getUser),
  authByCookie: () => axiosInstance.get(EndPoint.getToken),

  registerUser: (formValues) => axiosInstance.post(EndPoint.registration, formValues),

  clearAuthToken: () => axiosInstance.delete(EndPoint.deleteToken),

  registerUserByGoogle: (data) => axiosInstance.post(EndPoint.googleRegistration, data),

  loginUserByGoogle: (jwt) => axiosInstance.post(EndPoint.googleLogin, {jwt}),
}


export default authApi

import axiosInstance from 'shared/config/axios'
import { AuthApi } from './types'
import EndPoints from 'shared/config/endpoints'


const EndPoint = EndPoints.AUTH

const authApi: AuthApi = {
  loginUser: (formValues) => axiosInstance.post(EndPoint.login, formValues),

  getCurrentUser: () => axiosInstance.get(EndPoint.getUser),

  registerUser: (formValues) => axiosInstance.post(EndPoint.registration, formValues),

  clearAuthToken: () => axiosInstance.delete(EndPoint.deleteToken),

  registerUserByGoogle: (data) => axiosInstance.post(EndPoint.googleRegistration, data),

  loginUserByGoogle: (jwt) => axiosInstance.post(EndPoint.googleLogin, { jwt })
}


export default authApi

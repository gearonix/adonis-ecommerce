import axios from 'axios'
import appConfig from 'app/config/config'


const axiosInstance = axios.create({
  baseURL: appConfig.SERVER_URL,
  withCredentials: true
})


axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (!error.response) {
        throw Error('Please check your internet connection.')
      }
      return Promise.reject(error)
    }
)

export default axiosInstance

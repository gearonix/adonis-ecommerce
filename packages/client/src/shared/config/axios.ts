import axios from 'axios'
import appConfig from 'app/config/config'


const axiosInstance = axios.create({
  baseURL: appConfig.SERVER_URL,
  withCredentials: true
})

export default axiosInstance

import axios from 'axios';
import appConfig from "app/config";


const axiosInstance = axios.create({
    baseURL: appConfig.SERVER_URL,
    withCredentials: true,

})

const AUTH_TOKEN = typeof window !== 'undefined' ? localStorage.getItem('AUTH_TOKEN') : null

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`


export default axiosInstance

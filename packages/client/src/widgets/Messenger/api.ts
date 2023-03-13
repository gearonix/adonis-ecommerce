import endpoints from 'shared/config/consts/endpoints'
import axiosInstance from 'shared/config/consts/axios'

const endpoint = endpoints.MESSENGER

export const messengerApi = {
  getRooms() {
    return axiosInstance.get(endpoint.getRooms)
  }
}

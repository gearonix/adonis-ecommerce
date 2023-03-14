import endpoints from 'shared/config/consts/endpoints'
import axiosInstance from 'shared/config/consts/axios'
import { MessengerApi } from 'widgets/Messenger/types'

const endpoint = endpoints.MESSENGER

export const messengerApi: MessengerApi = {
  getRooms(userId) {
    return axiosInstance.put(endpoint.getRooms, { userId })
  },
  selectRoom(roomId: number, userId: number) {
    return axiosInstance.put(`${endpoint.selectRoom}/${roomId}`, {userId})
  }
}

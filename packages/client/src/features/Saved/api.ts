import endpoints from 'shared/config/endpoints'
import axiosInstance from 'shared/config/axios'
import { SavedApi } from 'features/Saved/types'

const endpoint = endpoints.PRODUCTS


export const savedApi: SavedApi = {
  getSaved() {
    return axiosInstance.get(endpoint.saved)
  },
  add(productId) {
    return axiosInstance.post(endpoint.addToSaved, { productId })
  },
  remove(productId) {
    return axiosInstance.delete(endpoint.removeFromSaved, { data: { productId } })
  },
  setProducts(userId) {
    return axiosInstance.get(`${endpoint.productsByIds}?userId=${userId}`)
  }
}

import endpoints from 'shared/config/endpoints'
import axiosInstance from 'shared/config/axios'
import { AxiosResponse as Res } from 'shared/types/common'
import { SavedModel } from 'features/Saved/types'
import { Product } from 'shared/types/slices'

const endpoint = endpoints.PRODUCTS

export const SavedApi = {
  getSavedProducts(): Res<SavedModel[]> {
    return axiosInstance.get(endpoint.saved)
  },
  addToSaved(productId : number): Res<void> {
    return axiosInstance.post(endpoint.addToSaved, { productId })
  },
  removeFromSaved(productId : number): Res<void> {
    return axiosInstance.delete(endpoint.removeFromSaved, { data: { productId } })
  },
  setSavedProducts(userId: number): Res<Product[]> {
    return axiosInstance.get(`${endpoint.productsByIds}?userId=${userId}`)
  }
}

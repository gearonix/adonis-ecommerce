import axiosInstance from 'shared/config/consts/axios'
import Endpoints from 'shared/config/consts/endpoints'
import { CurrentProductApi } from 'widgets/CurrentProduct/types'


const currentProductApi: CurrentProductApi = {
  getProduct(id) {
    return axiosInstance.get(`${Endpoints.PRODUCTS.products}/${id}`)
  },
  createComment(comment) {
    return axiosInstance.post(Endpoints.COMMENTS.createProductComment, comment)
  },
  setCommentsPage(productId, page) {
    return axiosInstance.get(`${Endpoints.COMMENTS.getProductComments}/${productId}?page=${page}`)
  }
}

export default currentProductApi

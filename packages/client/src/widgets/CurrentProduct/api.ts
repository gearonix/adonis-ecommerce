import { AxiosResponse as Res } from 'shared/types/common'
import { CurrentProduct, ProductComment } from 'shared/types/slices'
import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import { AddComment } from 'widgets/CurrentProduct/types'
import { ProductComments } from 'shared/types/slices/currentProduct'


const CurrentProductApi = {
  getProduct(id: number): Res<CurrentProduct> {
    return axiosInstance.get(`${Endpoints.PRODUCTS.products}/${id}`)
  },
  createComment(comment: AddComment): Res<ProductComment> {
    return axiosInstance.post(Endpoints.COMMENTS.createProductComment, comment)
  },
  setCommentsPage(productId: number, page: number): Res<ProductComments> {
    return axiosInstance.get(`${Endpoints.COMMENTS.getProductComments}/${productId}?page=${page}`)
  }
}

export default CurrentProductApi

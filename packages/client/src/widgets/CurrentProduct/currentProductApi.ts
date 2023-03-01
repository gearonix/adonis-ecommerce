import {AxiosResponse as Res} from 'shared/types/common'
import {CurrentProduct, ProductComment} from 'shared/types/slices'
import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import {AddComment} from 'widgets/CurrentProduct/types'


const CurrentProductApi = {
  getProduct(id: number): Res<CurrentProduct> {
    return axiosInstance.get(`${Endpoints.PRODUCTS.products}/${id}`)
  },
  createComment(comment: AddComment): Res<ProductComment> {
    return axiosInstance.post(Endpoints.COMMENTS.createProductComment, comment)
  },
}

export default CurrentProductApi

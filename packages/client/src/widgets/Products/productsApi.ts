import {AddProductForm} from 'widgets/Products/types'
import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import {AxiosResponse as Res} from 'shared/types/common'
import {Product} from 'shared/types/slices'

const endpoint = Endpoints.PRODUCTS

export const ProductsApi = {
  addProduct: (formValues: AddProductForm): Res<Product> => axiosInstance.post(endpoint.createProduct, formValues),
  setProductImages(productId: number, formData: FormData): Res<Product> {
    return axiosInstance.post(endpoint.setProductImages(productId), formData)
  },
  myProducts(): Res<Product[]> {
    return axiosInstance.get(endpoint.myProducts)
  },
}

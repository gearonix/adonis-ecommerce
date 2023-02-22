import {AddProductForm, SearchControlsForm} from 'widgets/Products/types'
import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import {AxiosResponse as Res} from 'shared/types/common'
import {Product} from 'shared/types/slices'
import {Helpers} from 'shared/lib/helpers/others'

const endpoint = Endpoints.PRODUCTS
const helpers = new Helpers()

export const ProductsApi = {
  addProduct: (formValues: AddProductForm): Res<Product> => axiosInstance.post(endpoint.createProduct, formValues),
  setProductImages(productId: number, formData: FormData): Res<Product> {
    return axiosInstance.post(endpoint.setProductImages(productId), formData)
  },
  myProducts(): Res<Product[]> {
    return axiosInstance.get(endpoint.myProducts)
  },
  products(filter: Partial<SearchControlsForm>): Res<Product[]> {
    const query = helpers.objectToQuery(filter)
    return axiosInstance.get(`${endpoint.products}?${query}`)
  },
  recommendedProducts(): Res<Product[]> {
    return axiosInstance.get(endpoint.recommended)
  },
}

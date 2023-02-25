import {AddProductForm, SearchControlsForm, SearchQuery} from 'widgets/Products/types'
import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import {AxiosResponse as Res} from 'shared/types/common'
import {Product} from 'shared/types/slices'
import {Helpers} from 'shared/lib/helpers/others'

const endpoint = Endpoints.PRODUCTS
const helpers = new Helpers()

export interface ProductsWithCount{
  data: Product[],
  count: number
}

export const ProductsApi = {
  addProduct: (formValues: AddProductForm): Res<Product> => axiosInstance.post(endpoint.createProduct, formValues),
  setProductImages(productId: number, formData: FormData): Res<Product> {
    return axiosInstance.post(endpoint.setProductImages(productId), formData)
  },
  myProducts(): Res<ProductsWithCount> {
    return axiosInstance.get(endpoint.myProducts)
  },
  products(filter: SearchQuery, page: number): Res<ProductsWithCount> {
    const query = helpers.toQuery(helpers.partial({...filter, page}))
    return axiosInstance.get(`${endpoint.products}?${query}`)
  },
  recommendedProducts(filter: Partial<SearchControlsForm>): Res<Product[]> {
    const query = helpers.toQuery(helpers.partial(filter))
    return axiosInstance.get(`${endpoint.recommended}?${query}`)
  },
}

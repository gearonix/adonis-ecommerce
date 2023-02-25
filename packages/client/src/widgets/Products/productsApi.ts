import {AddProductForm, SearchControlsForm, SearchQuery} from 'widgets/Products/types'
import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import {AxiosResponse as Res, Nullable, ObjectNullable} from 'shared/types/common'
import {CurrentProduct, Product} from 'shared/types/slices'
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
    return axiosInstance.post(`${endpoint.setProductImages}?product_id=${productId}`, formData)
  },
  myProducts(page: Nullable<number>): Res<ProductsWithCount> {
    return axiosInstance.get(`${endpoint.myProducts}?page=${page}`)
  },
  products(filter: ObjectNullable<SearchQuery>): Res<ProductsWithCount> {
    const query = helpers.toQuery(helpers.partial(filter))
    console.log(`${endpoint.products}?${query}`)
    return axiosInstance.get(`${endpoint.products}?${query}`)
  },
  recommendedProducts(filter: Partial<SearchControlsForm>): Res<Product[]> {
    const query = helpers.toQuery(helpers.partial(filter))
    return axiosInstance.get(`${endpoint.recommended}?${query}`)
  },
  getProduct(id: number): Res<CurrentProduct> {
    return axiosInstance.get(`${endpoint.products}/${id}`)
  },
}

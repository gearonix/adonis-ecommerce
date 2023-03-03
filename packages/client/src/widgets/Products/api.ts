import { ProductsApi } from 'widgets/Products/types'
import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import { Helpers } from 'shared/lib/helpers'

const endpoint = Endpoints.PRODUCTS
const helpers = new Helpers()


export const productsApi: ProductsApi = {
  addProduct(formValues) {
    return axiosInstance.post(endpoint.createProduct, formValues)
  },
  setProductImages(productId, formData) {
    return axiosInstance.post(`${endpoint.setProductImages}?product_id=${productId}`, formData)
  },
  userProducts(id, page) {
    return axiosInstance.get(`${endpoint.userProducts}/${id}?page=${page}`)
  },
  getProducts(filter) {
    const query = helpers.toQuery(helpers.partial(filter))
    return axiosInstance.get(`${endpoint.products}?${query}`)
  },
  recommended(filter) {
    const query = helpers.toQuery(helpers.partial(filter))
    return axiosInstance.get(`${endpoint.recommended}?${query}`)
  },
  getProduct(id) {
    return axiosInstance.get(`${endpoint.products}/${id}`)
  },
  getCartProducts(ids) {
    return axiosInstance.put(`${endpoint.productsByIds}`, { ids })
  }
}

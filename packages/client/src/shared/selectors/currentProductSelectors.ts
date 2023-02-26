import {AppState} from 'shared/types/redux'

const ProductSelectors = {
  product: ({currentProduct}: AppState) => currentProduct,
  name: ({currentProduct}: AppState) => currentProduct.name,
  id: ({currentProduct}: AppState) => currentProduct.productId,
}


export default ProductSelectors

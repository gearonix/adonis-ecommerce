import {AppState} from 'shared/types/redux'

const ProductSelectors = {
  product: ({currentProduct}: AppState) => currentProduct,
  name: ({currentProduct}: AppState) => currentProduct.name,
  id: ({currentProduct}: AppState) => currentProduct.productId,
  comments: ({currentProduct}: AppState) => currentProduct.comments,
}


export default ProductSelectors

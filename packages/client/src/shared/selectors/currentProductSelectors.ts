import {AppState} from 'shared/types/redux'

const ProductSelectors = {
  product: ({currentProduct}: AppState) => currentProduct,
  name: ({currentProduct}: AppState) => currentProduct.name,
}


export default ProductSelectors

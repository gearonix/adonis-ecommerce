import {AppState} from 'shared/types/redux'

const ProductSelectors = {
  myProducts: ({products}: AppState) => products.myProducts,
  products: ({products}: AppState) => products.products,
  productsLength: ({products}: AppState) => products.products.length,
}


export default ProductSelectors

import {AppState} from 'shared/types/redux'

const ProductSelectors = {
  myProducts: ({products}: AppState) => products.myProducts.data,
  products: ({products}: AppState) => products.products.data,
  productsLength: ({products}: AppState) => products.products.data.length,
  productsTotalLength: ({products}: AppState) => products.products.count,
  productsPage: ({products}: AppState) => products.products.page,
}


export default ProductSelectors

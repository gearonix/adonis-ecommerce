import {AppState} from 'shared/types/redux'

const ProductSelectors = {
  currentProduct: ({currentProduct} : AppState) => currentProduct,
  product: ({currentProduct}: AppState) => currentProduct.productInfo,
  name: ({currentProduct}: AppState) => currentProduct.productInfo.name,
  id: ({currentProduct}: AppState) => currentProduct.productInfo.productId,
  comments: ({currentProduct}: AppState) => currentProduct.comments?.data,
  commentsPage: ({currentProduct}: AppState) => currentProduct.comments?.page,
  commentsCount: ({currentProduct}: AppState) => currentProduct.comments.count,
}


export default ProductSelectors

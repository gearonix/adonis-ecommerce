import { RequiredState } from 'app/store/types'
import { AppState } from 'shared/types/redux'

const ProductSelectors = {
  currentProduct: ({ currentProduct } : RequiredState) => currentProduct,
  product: ({ currentProduct }: RequiredState) => currentProduct.productInfo,
  name: ({ currentProduct }: RequiredState) => currentProduct.productInfo.name,
  id: ({ currentProduct }: AppState) => currentProduct?.productInfo.productId,
  comments: ({ currentProduct }: RequiredState) => currentProduct.comments?.data,
  commentsPage: ({ currentProduct }: RequiredState) => currentProduct.comments?.page,
  commentsCount: ({ currentProduct }: RequiredState) => currentProduct.comments.count
}


export default ProductSelectors

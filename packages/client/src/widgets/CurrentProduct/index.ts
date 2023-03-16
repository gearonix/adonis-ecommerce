export { default as ProductInfo } from './ui/ProductInfo/ProductInfo'
export { default as ProductCommentUI } from './ui/ProductComments/ProductComments'

export { default as currentProductSlice, productActions } from './store/slice/productReducer'

export { changeCommentsPage } from './store/thunks/comments/changeCommentsPage/changeCommentsPage'

export { default as currentProductApi } from './api'
export type { CurrentProductApi } from './types'

export type{ CurrentProductSlice, ProductComment,
  ProductComments } from './store/slice/initialState'

export { productInitialState as productInitialState } from './store/slice/initialState'

export { default as ProductSelectors } from './store/selectors/currentProduct.selectors'

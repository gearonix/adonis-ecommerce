export { default as ProductInfo } from './ui/ProductInfo/ProductInfo'
export { default as ProductComment } from './ui/ProductComments/ProductComments'

export { default as currentProductSlice, productActions } from './store/slice/productReducer'

export { changeCommentsPage } from './store/thunks/comments/changeCommentsPage'

export { default as currentProductApi } from './api'
export type { CurrentProductApi } from './types'

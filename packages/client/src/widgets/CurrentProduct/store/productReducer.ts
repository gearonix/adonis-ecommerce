import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { withLoading } from 'shared/lib/helpers'
import { CurrentProduct, ProductComment } from 'shared/types/slices'
import { ProductComments, productInitialState as initialState } from 'shared/types/slices/currentProduct'
import { getProduct } from 'widgets/CurrentProduct/store/thunks'

const productReducer = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {
    setProduct(state, { payload }: Action<CurrentProduct>) {
      state.productInfo = payload.productInfo
      state.comments.data = payload.comments.data
      state.comments.count = payload.comments.count
      state.salesman = payload.salesman
    },
    clearProduct() {
      return initialState
    },
    addComment(state, { payload }: Action<ProductComment>) {
      state.comments?.data.unshift(payload)
    },
    setCommentsPage(state, { payload }: Action<number>) {
      state.comments.page = payload
    },
    setComments(state, { payload }: Action<ProductComments>) {
      state.comments.data = payload.data
      state.comments.count = payload.count
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getProduct)
  }
})

export const productActions = productReducer.actions

export default productReducer.reducer

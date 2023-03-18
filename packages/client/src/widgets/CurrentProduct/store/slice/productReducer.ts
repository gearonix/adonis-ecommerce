import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { withLoading } from 'shared/lib/helpers'
import { ProductComments, CurrentProductSlice, ProductComment } from
  'widgets/CurrentProduct'
import { productInitialState } from 'widgets/CurrentProduct/store/slice/initialState'
import { getProduct } from 'widgets/CurrentProduct/store/thunks'


const productReducer = createSlice({
  name: 'currentProduct',
  initialState: productInitialState,
  reducers: {
    setProduct(state, { payload }: Action<CurrentProductSlice>) {
      state.productInfo = payload.productInfo
      state.comments.data = payload.comments.data
      state.comments.count = payload.comments.count
      state.salesman = payload.salesman
    },
    clearProduct() {
      return productInitialState
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
    },
    changeSavedCount(state, { payload }: Action<'add' | 'remove'>) {
      if (payload === 'add') {
        state.productInfo.savedCount += 1
      } else {
        state.productInfo.savedCount -= 1
      }
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getProduct)
  }
})

export const productActions = productReducer.actions

export default productReducer.reducer

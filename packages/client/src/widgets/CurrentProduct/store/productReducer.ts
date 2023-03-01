import {createSlice, PayloadAction as Action} from '@reduxjs/toolkit'
import {productInitialState as initialState} from 'shared/config/redux/initialStates'
import {CurrentProduct, ProductComment} from 'shared/types/slices'

const productReducer = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {
    setProduct(state, {payload}: Action<CurrentProduct>) {
      state.productInfo = payload.productInfo
      state.comments.data = payload.comments.data
      state.salesman = payload.salesman
    },
    clearProduct() {
      return initialState
    },
    addComment(state, {payload}: Action<ProductComment>) {
      state.comments?.data.unshift(payload)
    },
  },
})

export const productActions = productReducer.actions

export default productReducer.reducer

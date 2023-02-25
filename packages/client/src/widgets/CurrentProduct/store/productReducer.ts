import {createSlice, PayloadAction as Action} from '@reduxjs/toolkit'
import {currentProductInitialState as initialState} from 'shared/config/redux/initialStates'
import {CurrentProduct} from 'shared/types/slices'

const productReducer = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {
    setProduct(state, {payload}: Action<CurrentProduct>) {
      return {...state, ...payload}
    },
    clearProduct() {
      return initialState
    },
  },
})

export const productActions = productReducer.actions

export default productReducer.reducer

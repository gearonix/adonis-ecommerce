import {createSlice, PayloadAction as Action} from '@reduxjs/toolkit'
import {ProductsWithCount} from 'widgets/Products/productsApi'
import {SearchQuery} from 'widgets/Products/types'
import {productsInitialState as initialState} from 'shared/config/redux/initialStates'


const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, {payload}: Action<ProductsWithCount>) {
      state.products = payload.data
      state.count = payload.count
    },
    clearProducts() {
      return initialState
    },
    changeFilter(state, {payload}: Action<Partial<SearchQuery>>) {
      // @ts-ignore
      state.filter = {...state.products.filter, ...payload}
    },
  },
})

export const productsActions = productsReducer.actions

export const productsSlice = productsReducer.reducer

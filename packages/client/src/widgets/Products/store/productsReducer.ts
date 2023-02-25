import {ProductsSlice} from 'shared/types/slices'
import {createSlice, PayloadAction as Action} from '@reduxjs/toolkit'
import {ProductsWithCount} from 'widgets/Products/productsApi'

const initialProducts = {
  data: [],
  count: 0,
  page: 0,
}

const initialState : ProductsSlice = {
  products: initialProducts,
  myProducts: initialProducts,
}

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setMyProducts(state, {payload}: Action<ProductsWithCount>) {
      state.myProducts.data = payload.data
      state.myProducts.count = payload.count
    },
    setProducts(state, {payload}: Action<ProductsWithCount>) {
      state.products.data = payload.data
      state.products.count = payload.count
    },
    clearProducts(state) {
      state.products = initialProducts
    },
    setProductsPage(state, {payload}: Action<number>) {
      state.products.page = payload
    },
  },
})

export const productsActions = productsReducer.actions

export const productsSlice = productsReducer.reducer

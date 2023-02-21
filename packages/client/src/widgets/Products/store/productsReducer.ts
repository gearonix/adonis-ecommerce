import {Product, ProductsSlice} from 'shared/types/slices'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState : ProductsSlice = {
  products: [],
  myProducts: [],
}

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setMyProducts(state, {payload}: PayloadAction<Product[]>) {
      state.myProducts = payload
    },
    setProducts(state, {payload}: PayloadAction<Product[]>) {
      state.products = payload
    },
  },
})

export const productsActions = productsReducer.actions

export const productsSlice = productsReducer.reducer

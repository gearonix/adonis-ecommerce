import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { SearchQuery, ProductsWithCount } from 'widgets/Products/types'
import { productsInitialState as initialState } from 'shared/types/slices/products'
import { withLoading } from 'shared/lib/helpers/others/reduxHelpers'
import { getProducts, getUserProducts } from 'widgets/Products/store/thunks'


const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, { payload }: Action<ProductsWithCount>) {
      console.log(payload)
      state.products = payload.data
      state.count = payload.count
    },
    clearProducts() {
      console.log('CLEAR PRODUCTS')
      return initialState
    },
    changeFilter(state, { payload }: Action<Partial<SearchQuery>>) {
      console.log('FILTER CHANGED', payload)
      // @ts-ignore
      state.filter = { ...state.products.filter, ...payload }
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getUserProducts, getProducts)
  }
})

export const productsActions = productsReducer.actions

export const productsSlice = productsReducer.reducer

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
      state.products = payload.data
      state.count = payload.count
    },
    clearProducts() {
      return initialState
    },
    changeFilter(state, { payload }: Action<Partial<SearchQuery>>) {
      // @ts-ignore
      state.filter = { ...state.filter, ...payload }
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getUserProducts, getProducts)
  }
})

export const productsActions = productsReducer.actions

export const productsSlice = productsReducer.reducer

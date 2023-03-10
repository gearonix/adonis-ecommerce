import { createThunk } from 'shared/types/redux'
import { productsActions } from 'widgets/Products/store/slice/productsReducer'
import isError from 'next/dist/lib/is-error'
import { SearchQuery } from 'widgets/Products/types'
import { ObjectNullable } from 'shared/types/common'

export const getProducts = createThunk('products/GET_PRODUCTS',
    async (filter: ObjectNullable<SearchQuery>, { dispatch, extra, rejectWithValue }) => {
      const products = await extra.api.products.getProducts(filter)
      if (isError(products)) return rejectWithValue('An error occurred.')

      dispatch(productsActions.setProducts(products.data))
    })

import { createThunk } from 'shared/types/redux'
import { productsApi } from 'widgets/Products/api'
import { productsActions } from 'widgets/Products/store/slice/productsReducer'
import isError from 'next/dist/lib/is-error'
import { SearchQuery } from 'widgets/Products/types'
import { ObjectNullable } from 'shared/types/common'

export const getProducts = createThunk('products/GET_PRODUCTS',
    async (filter: ObjectNullable<SearchQuery>, { dispatch, extra }) => {
      const products = await extra.api.products.getProducts(filter)
      if (isError(products)) return

      dispatch(productsActions.setProducts(products.data))
    })

import {createThunk} from 'shared/types/redux'
import {ProductsApi} from 'widgets/Products/productsApi'
import {productsActions} from 'widgets/Products/store/productsReducer'
import isError from 'next/dist/lib/is-error'
import {SearchQuery} from 'widgets/Products/types'
import {ObjectNullable} from 'shared/types/common'

export const getProducts = createThunk('products/GET_PRODUCTS',
    async (filter: ObjectNullable<SearchQuery>, {dispatch}) => {
      const products = await ProductsApi.products(filter)
      if (isError(products)) return

      dispatch(productsActions.setProducts(products.data))
    })
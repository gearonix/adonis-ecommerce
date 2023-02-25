import {createThunk} from 'shared/types/redux'
import {ProductsApi} from 'widgets/Products/productsApi'
import {productsActions} from 'widgets/Products/store/productsReducer'
import isError from 'next/dist/lib/is-error'
import {SearchQuery} from 'widgets/Products/types'
import {ProductSelectors} from 'shared/selectors'

export const getProducts = createThunk('products/GET_PRODUCTS',
    async (filter: SearchQuery = {}, {dispatch, getState}) => {
      const page = ProductSelectors.productsPage(getState())

      const products = await ProductsApi.products(filter, page)
      if (isError(products)) return

      dispatch(productsActions.setProducts(products.data))
    })

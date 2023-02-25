import {createThunk} from 'shared/types/redux'
import {ProductsApi} from 'widgets/Products/productsApi'
import isError from 'next/dist/lib/is-error'
import {productsActions} from 'widgets/Products/store/productsReducer'
import {Nullable} from 'shared/types/common'

export const getMyProducts = createThunk('products/GET_MY_PRODUCTS',
    async (page: Nullable<number>, {dispatch}) => {
      const response = await ProductsApi.myProducts(page)
      if (isError(response)) return
      dispatch(productsActions.setProducts(response.data))
    })

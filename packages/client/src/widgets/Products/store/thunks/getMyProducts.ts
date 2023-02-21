import {createThunk} from 'shared/types/redux'
import {ProductsApi} from 'widgets/Products/productsApi'
import isError from 'next/dist/lib/is-error'
import {productsActions} from 'widgets/Products/store/productsReducer'

export const getMyProducts = createThunk('products/GET_MY_PRODUCTS',
    async (_, {dispatch}) => {
      const response = await ProductsApi.myProducts()
      if (isError(response)) return
      dispatch(productsActions.setMyProducts(response.data))
    })

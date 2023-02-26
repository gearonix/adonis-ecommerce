import {createThunk} from 'shared/types/redux'
import {ProductsApi} from 'widgets/Products/productsApi'
import isError from 'next/dist/lib/is-error'
import {productsActions} from 'widgets/Products/store/productsReducer'
import {Nullable} from 'shared/types/common'
import UserSelectors from 'shared/selectors/userSelectors'

export const getUserProducts = createThunk('products/GET_MY_PRODUCTS',
    async (page: Nullable<number>, {dispatch, getState}) => {
      const salesmanId = UserSelectors.userId(getState()) as number

      const response = await ProductsApi.userProducts(salesmanId, page)
      if (isError(response)) return
      dispatch(productsActions.setProducts(response.data))
    })
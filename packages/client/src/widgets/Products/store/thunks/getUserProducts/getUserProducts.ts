import { createThunk } from 'shared/types/redux'
import { productsActions } from 'widgets/Products/store/slice/productsReducer'
import { Nullable } from 'shared/types/common'
import ProfileSelectors from 'widgets/Profile/store/selectors/profile/profile.selectors'
import { isError } from 'shared/lib/helpers'

export const getUserProducts = createThunk('products/GET_MY_PRODUCTS',
    async (page: Nullable<number>, { dispatch, getState, extra }) => {
      const salesmanId = ProfileSelectors.userId(getState()) as number

      const response = await extra.api.products.userProducts(salesmanId, page)
      if (isError(response)) return
      dispatch(productsActions.setProducts(response.data))
    })

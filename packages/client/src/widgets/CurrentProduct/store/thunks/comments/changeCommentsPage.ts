import { createThunk } from 'shared/types/redux'
import { ProductSelectors } from 'shared/selectors'
import { isError as isError } from 'shared/lib/helpers/others/httpHelpers'
import { productActions } from '../../productReducer'

export const changeCommentsPage = createThunk('currentProduct/SET_COMMENTS_PAGE',
    async (page: number, { dispatch, getState, extra }) => {
      const productId = ProductSelectors.id(getState()) as number
      if (!productId) {
        return
      }
      const response = await extra.api.product.setCommentsPage(productId, page)
      if (isError(response)) {
        return
      }
      dispatch(productActions.setComments(response.data))
    })

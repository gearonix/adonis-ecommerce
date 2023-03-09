import { createThunk } from 'shared/types/redux'
import { ProductSelectors } from 'shared/selectors'
import { isError as isError } from 'shared/lib/helpers/others/httpHelpers'
import { productActions } from '../../slice/productReducer'

export const addComment = createThunk('currentProduct/ADD_COMMENT',
    async (message: string, { dispatch, getState, extra }) => {
      const productId = ProductSelectors.id(getState()) as number
      const response = await extra.api.product.createComment({ message, productId })
      if (isError(response)) {
        return
      }
      dispatch(productActions.addComment(response.data))
    })

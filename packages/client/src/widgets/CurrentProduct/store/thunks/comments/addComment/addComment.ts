import { createThunk } from 'shared/types/redux'
import { ProductSelectors } from 'shared/selectors'
import { isError as isError } from 'shared/lib/helpers/others/httpHelpers'
import { productActions } from 'widgets/CurrentProduct'

export const addComment = createThunk('currentProduct/ADD_COMMENT',
    async (message: string, { dispatch, getState, extra }) => {
      const productId = ProductSelectors.id(getState()) as number
      const response = await extra.api.product.createComment({ message, productId })
      if (isError(response)) {
        return 'An error occurred.'
      }
      dispatch(productActions.setCommentsPage(0))
      dispatch(productActions.addComment(response.data))
    })

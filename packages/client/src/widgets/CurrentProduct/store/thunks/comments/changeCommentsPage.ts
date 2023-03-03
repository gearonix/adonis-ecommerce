import { createThunk } from 'shared/types/redux'
import CurrentProductApi from 'widgets/CurrentProduct/api'
import { ProductSelectors } from 'shared/selectors'
import { isError as isError } from 'shared/lib/helpers/others/httpHelpers'
import { productActions } from '../../productReducer'

export const changeCommentsPage = createThunk('currentProduct/SET_COMMENTS_PAGE',
    async (page: number, { dispatch, getState }) => {
      const productId = ProductSelectors.id(getState()) as number
      if (!productId) {
        return
      }
      const response = await CurrentProductApi.setCommentsPage(productId, page)
      if (isError(response)) {
        return
      }
      dispatch(productActions.setComments(response.data))
    })

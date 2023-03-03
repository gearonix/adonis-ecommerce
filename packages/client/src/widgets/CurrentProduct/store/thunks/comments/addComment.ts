import {createThunk} from 'shared/types/redux'
import CurrentProductApi from 'widgets/CurrentProduct/currentProductApi'
import {ProductSelectors} from 'shared/selectors'
import {isResponseError as isError} from 'shared/lib/helpers/others/httpHelpers'
import {productActions} from '../../productReducer'

export const addComment = createThunk('currentProduct/ADD_COMMENT',
    async (message: string, {dispatch, getState}) => {
      const productId = ProductSelectors.id(getState()) as number
      const response = await CurrentProductApi.createComment({message, productId})
      if (isError(response)) {
        return
      }
      dispatch(productActions.addComment(response.data))
    })

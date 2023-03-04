import { createThunk } from 'shared/types/redux'
import { savedApi } from 'features/Saved/api'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const addProductToSaved = createThunk('saved/ADD_PRODUCT_TO_SAVED',
    async (productId: number, { dispatch, extra }) => {
      const response = await savedApi.add(productId)
      if (isError(response)) return
      dispatch(savedActions.addToSaved(productId))
    })

import { createThunk } from 'shared/types/redux'
import { savedApi } from 'features/Saved/api'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const removeProductFromSaved = createThunk('saved/REMOVE_PRODUCT_FROM_SAVED',
    async (productId: number, { dispatch }) => {
      const response = await savedApi.remove(productId)
      if (isError(response)) return
      dispatch(savedActions.removeFromSaved(productId))
    })

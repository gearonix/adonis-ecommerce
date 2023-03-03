import { createThunk } from 'shared/types/redux'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const removeProductFromSaved = createThunk('saved/REMOVE_PRODUCT_FROM_SAVED',
    async (productId: number, { dispatch, extra }) => {
      const response = await extra.api.saved.remove(productId)
      if (isError(response)) return
      dispatch(savedActions.removeFromSaved(productId))
    })

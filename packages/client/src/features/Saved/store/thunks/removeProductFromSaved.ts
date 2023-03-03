import { createThunk } from 'shared/types/redux'
import { SavedApi } from 'features/Saved/savedApi'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const removeProductFromSaved = createThunk('saved/REMOVE_PRODUCT_FROM_SAVED',
    async (productId: number, { dispatch }) => {
      const response = await SavedApi.removeFromSaved(productId)
      if (isError(response)) return
      dispatch(savedActions.removeFromSaved(productId))
    })

import { createThunk } from 'shared/types/redux'
import { SavedApi } from 'features/Saved/savedApi'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const addProductToSaved = createThunk('saved/ADD_PRODUCT_TO_SAVED',
    async (productId: number, { dispatch }) => {
      const response = await SavedApi.addToSaved(productId)
      if (isError(response)) return
      dispatch(savedActions.addToSaved(productId))
    })

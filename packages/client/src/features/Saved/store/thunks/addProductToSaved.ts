import { createThunk } from 'shared/types/redux'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const addProductToSaved = createThunk('saved/ADD_PRODUCT_TO_SAVED',
    async (productId: number, { dispatch, extra }) => {
      const response = await extra.api.saved.add(productId)
      if (isError(response)) return
      dispatch(savedActions.addToSaved(productId))
    })

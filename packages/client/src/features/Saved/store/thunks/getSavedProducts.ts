import { createThunk } from 'shared/types/redux'
import { savedApi } from 'features/Saved/api'
import { savedActions } from 'features/Saved'
import { isError } from 'shared/lib/helpers/others/httpHelpers'

export const getSavedProducts = createThunk('saved/GET_SAVED_PRODUCTS',
    async (_, { dispatch, extra }) => {
      const response = await extra.api.saved.getSaved()
      if (isError(response)) return
      dispatch(savedActions.setSaved(response.data))
    })

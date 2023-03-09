import { createThunk } from 'shared/types/redux'
import { savedActions } from 'features/Saved'
import { isError } from 'shared/lib/helpers/others/httpHelpers'

export const getSavedProducts = createThunk('saved/GET_SAVED_PRODUCTS',
    async (_, { dispatch, extra, rejectWithValue }) => {
      const response = await extra.api.saved.getSaved()
      if (isError(response)) return rejectWithValue('An error occured.')
      dispatch(savedActions.setSaved(response.data))
    })

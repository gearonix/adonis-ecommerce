import { createThunk } from 'shared/types/redux'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const getSavedByIds = createThunk('saved/GET_SAVED_BY_IDS',
    async (id: number, { dispatch, extra, rejectWithValue }) => {
      const response = await extra.api.saved.setProducts(id)
      if (isError(response)) return rejectWithValue('An error occured.')
      dispatch(savedActions.setSavedProducts(response.data))
    })

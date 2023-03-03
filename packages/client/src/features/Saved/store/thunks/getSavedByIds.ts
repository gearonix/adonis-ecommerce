import { createThunk } from 'shared/types/redux'
import { savedApi } from 'features/Saved/api'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const getSavedByIds = createThunk('saved/GET_SAVED_BY_IDS',
    async (id: number, { dispatch, extra }) => {
      // const userId = AuthSelectors
      const response = await extra.api.saved.setProducts(id)
      if (isError(response)) return
      dispatch(savedActions.setSavedProducts(response.data))
    })

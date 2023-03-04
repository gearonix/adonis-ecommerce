import { createThunk } from 'shared/types/redux'
import { savedApi } from 'features/Saved/api'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const getSavedByIds = createThunk('saved/GET_SAVED_BY_IDS',
    async (id: number, { dispatch }) => {
      // const userId = AuthSelectors
      const response = await savedApi.setProducts(id)
      if (isError(response)) return
      dispatch(savedActions.setSavedProducts(response.data))
    })

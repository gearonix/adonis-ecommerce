import { createThunk } from 'shared/types/redux'
import { SavedApi } from 'features/Saved/savedApi'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { savedActions } from 'features/Saved'

export const getSavedByIds = createThunk('saved/GET_SAVED_BY_IDS',
    async (id: number, { dispatch }) => {
      // const userId = AuthSelectors
      const response = await SavedApi.setSavedProducts(id)
      if (isError(response)) return
      dispatch(savedActions.setSavedProducts(response.data))
    })

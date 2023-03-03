import {createThunk} from 'shared/types/redux'
import {SavedApi} from 'features/Saved/savedApi'
import {savedActions} from 'features/Saved'
import {isResponseError} from 'shared/lib/helpers/others/httpHelpers'

export const getSavedProducts = createThunk('saved/GET_SAVED_PRODUCTS',
    async (_, {dispatch}) => {
      const response = await SavedApi.getSavedProducts()
      if (isResponseError(response)) return
      dispatch(savedActions.setSaved(response.data))
    })

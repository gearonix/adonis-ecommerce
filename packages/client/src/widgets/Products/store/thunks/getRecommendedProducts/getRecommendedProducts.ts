import { isError } from 'shared/lib/helpers'
import { createThunk } from 'shared/types/redux'
import { SearchControlsForm } from 'widgets/Products/types'


export const getRecommendedProducts = createThunk('products/GET_RECOMMENDED_PRODUCTS',
    async (filter: Partial<SearchControlsForm>, { rejectWithValue, extra }) => {
      const response = await extra.api.products.recommended(filter)
      if (!response.data || isError(response)) {
        return rejectWithValue('')
      }

      return response.data
    })

import { createThunk } from 'shared/types/redux'
import { productsApi } from 'widgets/Products/api'
import isError from 'next/dist/lib/is-error'
import { SearchControlsForm } from 'widgets/Products/types'


export const getRecommendedProducts = createThunk('products/GET_RECOMMENDED_PRODUCTS',
    async (filter: Partial<SearchControlsForm>, { rejectWithValue, extra }) => {
      const response = await extra.api.products.recommended(filter)
      if (!response.data || isError(response)) {
        return rejectWithValue('')
      }

      return response.data
    })
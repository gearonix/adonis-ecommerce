import {createThunk} from 'shared/types/redux'
import {ProductsApi} from 'widgets/Products/productsApi'
import isError from 'next/dist/lib/is-error'


export const getRecommendedProducts = createThunk('products/GET_RECOMMENDED_PRODUCTS',
    async (_, {rejectWithValue}) => {
      const response = await ProductsApi.recommendedProducts()
      if (!response.data || isError(response)) {
        return rejectWithValue(null)
      }

      return response.data
    })

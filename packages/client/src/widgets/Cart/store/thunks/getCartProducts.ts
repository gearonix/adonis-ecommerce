import { createThunk } from 'shared/types/redux'
import { productsApi } from 'widgets/Products/api'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { Product } from 'shared/types/slices'
import { Nullable } from 'shared/types/common'

export const getCartProducts = createThunk('cart/GET_CART_PRODUCTS',
    async (ids: number[], { extra }): Promise<Nullable<Product[]>> => {
      const response = await extra.api.products.getCartProducts(ids)
      if (isError(response)) return null
      return response.data
    })

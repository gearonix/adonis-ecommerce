import { createThunk } from 'shared/types/redux'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { Nullable } from 'shared/types/common'
import { Product } from 'widgets/Products'

export const getCartProducts = createThunk('cart/GET_CART_PRODUCTS',
    async (ids: number[], { extra }): Promise<Nullable<Product[]>> => {
      const response = await extra.api.products.getCartProducts(ids)
      if (isError(response)) return null
      return response.data
    })

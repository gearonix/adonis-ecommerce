import { createThunk } from 'shared/types/redux'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { Product } from 'shared/types/slices'
import { Nullable } from 'shared/types/common'

export const getCartProducts = createThunk('cart/GET_CART_PRODUCTS',
    async (ids: number[], { extra: { api } }): Promise<Nullable<Product[]>> => {
      const response = await api.products.getCartProducts(ids)
      if (isError(response)) return null
      return response.data
    })

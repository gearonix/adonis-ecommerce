import {createThunk} from 'shared/types/redux'
import {ProductsApi} from 'widgets/Products/productsApi'
import {isResponseError} from 'shared/lib/helpers/others/httpHelpers'
import {Product} from 'shared/types/slices'
import {Nullable} from 'shared/types/common'

export const getCartProducts = createThunk('cart/GET_CART_PRODUCTS',
    async (ids: number[]): Promise<Nullable<Product[]>> => {
      const response = await ProductsApi.getCartProducts(ids)
      if (isResponseError(response)) return null
      return response.data
    })

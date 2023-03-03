import { createThunk } from 'shared/types/redux'
import { productActions } from 'widgets/CurrentProduct/store/productReducer'

export const getProduct = createThunk('currentProduct/GET_PRODUCT',
    async (id: string, { dispatch, extra }) => {
      if (!id) return
      const response = await extra.api.product.getProduct(+id)
      dispatch(productActions.setProduct(response.data))
    })

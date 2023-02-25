import {createThunk} from 'shared/types/redux'
import {ProductsApi} from 'widgets/Products/productsApi'
import {productActions} from 'widgets/CurrentProduct/store/productReducer'

export const getProduct = createThunk('currentProduct/GET_PRODUCT',
    async (id: string, {dispatch}) => {
      if (!id) return
      const response = await ProductsApi.getProduct(+id)
      dispatch(productActions.setProduct(response.data))
    })

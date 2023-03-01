import {createThunk} from 'shared/types/redux'
import {productActions} from 'widgets/CurrentProduct/store/productReducer'
import CurrentProductApi from 'widgets/CurrentProduct/currentProductApi'

export const getProduct = createThunk('currentProduct/GET_PRODUCT',
    async (id: string, {dispatch}) => {
      if (!id) return
      const response = await CurrentProductApi.getProduct(+id)
      dispatch(productActions.setProduct(response.data))
    })

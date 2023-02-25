import {userSlice} from 'widgets/Profile'
import {productsSlice} from 'widgets/Products'
import {currentProductSlice} from 'widgets/CurrentProduct'


export const createReducers = () => {
  return {
    user: userSlice,
    products: productsSlice,
    currentProduct: currentProductSlice,
  }
}

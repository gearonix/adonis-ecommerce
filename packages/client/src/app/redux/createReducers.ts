import {userSlice} from 'widgets/Profile'
import {productsSlice} from 'widgets/Products'


export const createReducers = () => {
  return {
    user: userSlice,
    products: productsSlice,
  }
}

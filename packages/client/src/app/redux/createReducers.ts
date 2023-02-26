import {userSlice} from 'widgets/Profile'
import {productsSlice} from 'widgets/Products'
import {currentProductSlice} from 'widgets/CurrentProduct'
import {authSlice} from 'widgets/Login/redux/authReducer'
import {cartSlice} from 'widgets/Cart'


export const createReducers = () => {
  return {
    user: userSlice,
    products: productsSlice,
    currentProduct: currentProductSlice,
    auth: authSlice,
    cart: cartSlice,
  }
}

import {userSlice} from 'widgets/Profile'
import {productsSlice} from 'widgets/Products'
import {currentProductSlice} from 'widgets/CurrentProduct'
import {authSlice} from 'widgets/Login'
import {cartSlice} from 'widgets/Cart'
import {savedSlice} from 'features/Saved'
import {postSlice} from 'widgets/Posts'


export const createReducers = () => {
  return {
    user: userSlice,
    products: productsSlice,
    currentProduct: currentProductSlice,
    auth: authSlice,
    cart: cartSlice,
    saved: savedSlice,
    posts: postSlice,
  }
}

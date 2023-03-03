import { userSlice } from 'widgets/Profile'
import { productsSlice } from 'widgets/Products'
import { currentProductSlice } from 'widgets/CurrentProduct'
import { authSlice } from 'widgets/Login'
import { cartSlice } from 'widgets/Cart'
import { savedSlice } from 'features/Saved'
import { postSlice } from 'widgets/Posts'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { State } from 'app/store/types'


export const createReducers = (): ReducersMapObject<State> => {
  return {
    user: userSlice,
    products: productsSlice,
    currentProduct: currentProductSlice,
    auth: authSlice,
    cart: cartSlice,
    saved: savedSlice,
    posts: postSlice
  }
}

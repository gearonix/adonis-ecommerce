import { userSlice } from 'widgets/Profile'
import { productsSlice } from 'widgets/Products'
import { authSlice } from 'widgets/Login'
import { cartSlice } from 'widgets/Cart'
import { savedSlice } from 'features/Saved'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/types'


export const createReducers = (): ReducersMapObject<StateSchema> => {
  return {
    user: userSlice,
    products: productsSlice,
    auth: authSlice,
    cart: cartSlice,
    saved: savedSlice
  }
}

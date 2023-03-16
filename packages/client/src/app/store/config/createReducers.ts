import { userSlice } from 'widgets/Profile'
import { productsSlice } from 'widgets/Products'
import { authSlice } from 'widgets/Login'
import { cartSlice } from 'widgets/Cart'
import { savedSlice } from 'features/Saved'
import { notifySlice } from 'app/providers/Notifications'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/types'


interface CreateReducers{
  (asyncReducers?: ReducersMapObject<StateSchema>): ReducersMapObject<StateSchema>
}

export const createReducers: CreateReducers = (asyncReducers) => {
  return {
    user: userSlice,
    products: productsSlice,
    auth: authSlice,
    cart: cartSlice,
    saved: savedSlice,
    notifications: notifySlice,
    ...asyncReducers
  }
}

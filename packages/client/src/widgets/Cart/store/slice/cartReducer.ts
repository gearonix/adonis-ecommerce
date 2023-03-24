import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { ReduxLocalStorage } from 'shared/lib/helpers'
import { LocalStorage } from 'shared/config/consts/others'
import { CartSlice } from 'widgets/Cart'

const storage = new ReduxLocalStorage<number[]>(LocalStorage.CART)

const initialState: CartSlice = {
  data: storage.get() || []
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }: Action<number>) {
      if (!state.data.includes(payload)) {
        state.data.push(payload)
        storage.save(state.data)
      }
    },
    removeProduct(state, { payload }: Action<number>) {
      state.data.splice(state.data.indexOf(payload), 1)
      storage.save(state.data)
    },
    removeAll(state) {
      storage.save([])
      state.data = []
    }
  }
})

export const cartActions = cartReducer.actions

export const cartSlice = cartReducer.reducer

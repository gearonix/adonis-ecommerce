import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { LocalStorage } from 'shared/config/consts/themes'
import { ReduxLocalStorage } from 'shared/lib/helpers'
import { CartSlice } from 'shared/types/slices'

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
    removeAll() {
      storage.save([])
      return initialState
    }
  }
})

export const cartActions = cartReducer.actions

export const cartSlice = cartReducer.reducer

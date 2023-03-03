import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { LocalStorage } from 'shared/config/themes'
import { ReduxLocalStorage } from 'shared/lib/helpers'

const storage = new ReduxLocalStorage<number[]>(LocalStorage.CART)

const initialState: number[] = storage.get() || []

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }: Action<number>) {
      if (!state.includes(payload)) {
        state.push(payload)
        storage.save(state)
      }
    },
    removeProduct(state, { payload }: Action<number>) {
      state.splice(state.indexOf(payload), 1)
      storage.save(state)
    },
    removeAll() {
      storage.save([])
      return []
    }
  }
})

export const cartActions = cartReducer.actions

export const cartSlice = cartReducer.reducer

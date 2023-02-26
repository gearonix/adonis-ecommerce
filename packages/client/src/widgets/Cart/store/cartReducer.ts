import {createSlice, PayloadAction as Action} from '@reduxjs/toolkit'

const initialState: number[] = []

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, {payload}: Action<number>) {
      if (!state.includes(payload)) {
        state.push(payload)
      }
    },
    removeProduct(state, {payload}: Action<number>) {
      state.splice(state.indexOf(payload), 1)
    },
    removeAll() {
      return initialState
    },
  },
})

export const cartActions = cartReducer.actions

export const cartSlice = cartReducer.reducer

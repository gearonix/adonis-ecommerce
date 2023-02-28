import {createSlice, PayloadAction as Action} from '@reduxjs/toolkit'
import {SavedModel} from 'features/Saved/types'
import {SavedSlice} from 'shared/types/slices'
import {Product} from 'shared/types/slices'

const initialState: SavedSlice = {
  saved: [],
  products: [],
}


const savedReducer = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    addToSaved(state, {payload}: Action<number>) {
      state.saved.push(payload)
    },
    removeFromSaved(state, {payload}: Action<number>) {
      state.saved.splice(state.saved.indexOf(payload), 1)
    },
    setSaved(state, {payload}: Action<SavedModel[]>) {
      state.saved = payload.map((model) => model.productId)
    },
    clearSavedProducts(state) {
      state.products = []
    },
    setSavedProducts(state, {payload}: Action<Product[]>) {
      state.products = payload
    },
  },
})

export const savedActions = savedReducer.actions

export const savedSlice = savedReducer.reducer

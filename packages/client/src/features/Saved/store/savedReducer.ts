import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { SavedModel } from 'features/Saved/types'
import { Product } from 'shared/types/slices'
import { savedInitialState as initialState } from 'shared/types/slices/saved'
import { withLoading } from 'shared/lib/helpers/others/reduxHelpers'
import { getSavedByIds } from 'features/Saved/store/thunks/getSavedByIds'


const savedReducer = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    addToSaved(state, { payload }: Action<number>) {
      state.saved.push(payload)
    },
    removeFromSaved(state, { payload }: Action<number>) {
      state.saved.splice(state.saved.indexOf(payload), 1)
    },
    setSaved(state, { payload }: Action<SavedModel[]>) {
      state.saved = payload.map((model) => model.productId)
    },
    clearSavedProducts(state) {
      state.products = []
    },
    setSavedProducts(state, { payload }: Action<Product[]>) {
      state.products = payload
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getSavedByIds)
  }
})

export const savedActions = savedReducer.actions

export const savedSlice = savedReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState, UsersSlice } from './initialState'


const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, { payload }: PayloadAction<UsersSlice>) {
      state.data = payload.data
      state.count = payload.count
    },
    changePage(state, { payload }: PayloadAction<number>) {
      state.page = payload
    }
  }
})

export const usersActions = userReducer.actions

export const usersSlice = userReducer.reducer

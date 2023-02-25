import {User} from 'shared/types/slices'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {usersInitialState as initialState} from 'shared/config/redux/initialStates'


const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, {payload}: PayloadAction<User>) {
      return {...state, ...payload}
    },
    clearUser(state) {
      return initialState
    },
    changeUserAvatar(state, {payload}: PayloadAction<{ fileUrl: string }>) {
      state.avatar = payload.fileUrl
    },
    changeUserBackground(state, {payload}: PayloadAction<{ fileUrl: string }>) {
      state.background = payload.fileUrl
    },
  },
})

export const userActions = userReducer.actions

export const userSlice = userReducer.reducer

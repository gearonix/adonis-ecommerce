import { User } from 'shared/types/slices'
import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { usersInitialState as initialState } from 'shared/types/slices/user'
import { withLoading } from 'shared/lib/helpers'
import { getUserById } from 'widgets/Login/store/thunks'
import { UserStatus } from 'shared/config/consts/others'


const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, { payload }: Action<User>) {
      return { ...state, ...payload }
    },
    clearUser() {
      return initialState
    },
    changeUserAvatar(state, { payload }: Action<{ fileUrl: string }>) {
      state.avatar = payload.fileUrl
    },
    changeUserBackground(state, { payload }: Action<{ fileUrl: string }>) {
      state.background = payload.fileUrl
    },
    setStatus(state, { payload }: Action<UserStatus>) {
      state.status = payload
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getUserById)
  }
})

export const userActions = userReducer.actions

export const userSlice = userReducer.reducer

import { User } from 'shared/types/slices'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { usersInitialState as initialState } from 'shared/types/slices/user'
import { withLoading } from 'shared/lib/helpers'
import { getUserById } from 'widgets/Login/store/thunks'


const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<User>) {
      return { ...state, ...payload }
    },
    clearUser() {
      return initialState
    },
    changeUserAvatar(state, { payload }: PayloadAction<{ fileUrl: string }>) {
      state.avatar = payload.fileUrl
    },
    changeUserBackground(state, { payload }: PayloadAction<{ fileUrl: string }>) {
      state.background = payload.fileUrl
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getUserById)
  }
})

export const userActions = userReducer.actions

export const userSlice = userReducer.reducer

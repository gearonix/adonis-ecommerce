import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'shared/types/slices'
import { authInitialState as initialState } from 'shared/types/slices/auth'


const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorizeUser(state, { payload }: PayloadAction<User>) {
      state.userId = payload.userId
      state.avatar = payload.avatar
      state.firstName = payload.firstName
      state.email = payload.email
      state.isAuthorized = true
    },
    authorizationFailed(state) {
      state.isAuthorized = false
    },
    logout() {
      return initialState
    }
  }
})

export const authActions = authReducer.actions

export const authSlice = authReducer.reducer

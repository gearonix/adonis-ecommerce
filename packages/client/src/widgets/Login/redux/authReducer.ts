import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {authInitialState as initialState} from 'shared/config/redux/initialStates'

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorizeUser(state, {payload}: PayloadAction<number>) {
      state.userId = payload
      state.isAuthorized = true
    },
    authorizationFailed(state) {
      state.isAuthorized = false
    },
    logout() {
      return initialState
    },
  },
})

export const authActions = authReducer.actions

export const authSlice = authReducer.reducer

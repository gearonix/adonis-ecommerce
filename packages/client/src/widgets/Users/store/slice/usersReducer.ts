import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState, UsersSlice } from './initialState'
import { User } from 'widgets/Profile'
import { NewUsers } from 'widgets/Users/types'
import { StateSchema } from 'app/store/types'
import { withLoading } from 'shared/lib/helpers'
import { getUsers } from 'widgets/Users/store/thunks/getUsers'

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.userId,
  sortComparer: (a, b) => a.email.localeCompare(b.email)
})


const userReducer = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState<UsersSlice>(initialState),
  reducers: {
    setUsers(state, { payload } : PayloadAction<NewUsers>) {
      usersAdapter.setAll(state, payload.data)
      state.count = payload.count
    },
    changePage(state, { payload }: PayloadAction<number>) {
      state.page = payload
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getUsers)
  }
})

export const usersActions = userReducer.actions

export const userAdapterSelectors = usersAdapter.getSelectors<StateSchema>(
    (state) => state.users
)

export const usersSlice = userReducer.reducer

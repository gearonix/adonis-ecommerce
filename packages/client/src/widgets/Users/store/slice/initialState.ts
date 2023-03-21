import { User } from 'widgets/Profile'
import { EntityState } from '@reduxjs/toolkit'

export interface UsersSlice extends EntityState<User>{
    count: number,
    page: number,
    isLoading: boolean
}


export const initialState: UsersSlice = {
  ids: [],
  entities: {},
  count: 0,
  page: 0,
  isLoading: false
}

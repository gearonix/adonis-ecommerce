import { User } from 'widgets/Profile'
import { EntityState } from '@reduxjs/toolkit'

export interface UsersSlice extends EntityState<User>{
    count: number,
    page: number
}


export const initialState: UsersSlice = {
  ids: [],
  entities: {},
  count: 0,
  page: 0
}

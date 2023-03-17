import { User } from 'widgets/Profile'

export interface UsersSlice{
    data: User[],
    count: number,
    page: number
}


export const initialState: UsersSlice = {
  data: [],
  count: 0,
  page: 0
}

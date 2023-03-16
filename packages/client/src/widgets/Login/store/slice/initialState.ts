import { ObjectNullable } from 'shared/types/common'

export type AuthSlice = ObjectNullable<{
    userId: number,
    isAuthorized: boolean,
    avatar: string,
    firstName: string,
    email: string
}>
export const initialState: AuthSlice = {
  isAuthorized: null,
  userId: null,
  avatar: null,
  firstName: null,
  email: null
}

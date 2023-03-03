import { UserRoles } from 'app/config/globals'
import { ObjectNullable } from 'shared/types/common'

export interface User {
    role: UserRoles,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string,
    background: string,
    description: string
    country: string,
    city: string
    userId: number,
    registration_date: string,
    isMe: boolean
}

export const usersInitialState: ObjectNullable<User> = {
  role: null,
  firstName: null,
  lastName: null,
  email: null,
  avatar: null,
  background: null,
  description: null,
  country: null,
  city: null,
  userId: null,
  registration_date: null,
  isMe: null
}

import { createSelector } from '@reduxjs/toolkit'
import Helpers from 'shared/lib/helpers/helpers'
import { raiseGoogleImageQuality } from 'widgets/Profile/lib/helpers'
import { Nullable } from 'shared/types/common'
import { UserRoles } from 'app/config/globals'
import { User, UserSelectors } from 'widgets/Profile'
import { RequiredState } from 'app/store/types'

export interface FormattedUser extends User{
  userName: string,
  description: string,
  userImage: Nullable<string>,
  background: string,
  country: string,
  city: string,
  date: string,
  role: UserRoles,
  userId: number
}


export const selectReformattedUser = (state: RequiredState):
  Nullable<FormattedUser> => {
  const user = state.user as User

  if (!user.userId) return null

  const helpers = new Helpers()

  const userEmail = helpers.emailToName(user.email)

  const userName = user.firstName ? helpers.attachStrings(
      user.firstName, user.lastName) : userEmail

  const userImage = raiseGoogleImageQuality(user.avatar)

  const date = helpers.reformatMysqlDate(user.registration_date)

  return {
    ...user,
    userName,
    description: user.description,
    userImage,
    background: user.background,
    country: user.country,
    city: user.city,
    role: user.role,
    date,
    userId: user.userId
  }
}

import {createSelector} from '@reduxjs/toolkit'
import {UserSelectors} from 'shared/selectors'
import {UserSlice} from 'shared/types/slices'
import Helpers from 'shared/lib/helpers/helpers'
import {raiseGoogleImageQuality} from 'widgets/Profile/lib/helpers'


export const selectReformattedUser = createSelector(UserSelectors.user, (user) => {
  const {firstName, lastName, description, email, avatar,
    background, userId} = user as UserSlice

  if (!userId) return null

  const helpers = new Helpers()

  const userEmail = helpers.getNameFromEmail(email)

  const userName = firstName ? helpers.attachStrings(firstName, lastName) : userEmail

  const userImage = raiseGoogleImageQuality(avatar)

  return {
    userName,
    description,
    userImage,
    background,
  }
})

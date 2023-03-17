import { createSelector } from '@reduxjs/toolkit'
import ProfileSelectors from '../profile/profile.selectors'
import {User} from 'widgets/Profile';

export const selectEditProfileValues = createSelector(ProfileSelectors.user, (user) => {
  const { firstName, lastName, description, country, city } = user as User

  return {
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      description,
      country,
      city
    }
  }
}
)

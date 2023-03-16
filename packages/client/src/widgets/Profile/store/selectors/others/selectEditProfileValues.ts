import { createSelector } from '@reduxjs/toolkit'
import UserSelectors from '../users/user.selectors'
import {User} from 'widgets/Profile';

export const selectEditProfileValues = createSelector(UserSelectors.user, (user) => {
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

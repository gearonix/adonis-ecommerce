import {createSelector} from '@reduxjs/toolkit'
import {UserSelectors} from 'shared/selectors'
import {UserSlice} from 'shared/types/slices'

export const selectEditProfileValues = createSelector(UserSelectors.user, (user) => {
  const {firstName, lastName, description, country, city} = user as UserSlice

  return {
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      description,
      country,
      city,
    },
  }
}
)

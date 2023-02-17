import {EditProfileForm} from 'widgets/Profile/types'
import {UserSlice} from 'shared/types/slices'
import {ObjectNullable} from 'shared/types/common'


export const useCreateEditProfileValues = (user: ObjectNullable<UserSlice>): { defaultValues: EditProfileForm } => {
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

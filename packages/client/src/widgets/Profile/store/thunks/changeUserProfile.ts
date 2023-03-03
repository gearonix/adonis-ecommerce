import { createThunk } from 'shared/types/redux'
import { EditProfileForm } from '../../types'
import profileApi from '../../api'
import { userActions } from 'widgets/Profile'
import isError from 'next/dist/lib/is-error'

export const changeUserProfile = createThunk(
    'users/CHANGE_PROFILE',
    async (formValues: Partial<EditProfileForm>, { dispatch }) => {
      const response = await profileApi.changeUserProfile(formValues)
      if (isError(response)) return
      dispatch(userActions.setUser(response.data))
    }
)

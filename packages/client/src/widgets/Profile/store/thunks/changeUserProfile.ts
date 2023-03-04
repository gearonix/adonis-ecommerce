import { createThunk } from 'shared/types/redux'
import { EditProfileForm } from '../../types'
import { userActions } from 'widgets/Profile'
import isError from 'next/dist/lib/is-error'

export const changeUserProfile = createThunk(
    'users/CHANGE_PROFILE',
    async (formValues: Partial<EditProfileForm>, { dispatch, extra }) => {
      const response = await extra.api.profile.changeUserProfile(formValues)
      if (isError(response)) return
      dispatch(userActions.setUser(response.data))
    }
)

import { createThunk } from 'shared/types/redux'
import { usersActions } from 'widgets/Users/store/slice/usersReducer'
import { isError } from 'shared/lib/helpers'
import { UsersForm } from 'widgets/Users/types'

export const getUsers = createThunk('profile/getUsers',
    async (values: UsersForm | undefined, { dispatch, extra, rejectWithValue }) => {
      const response = await extra.api.profile.getUsers(values)
      if (isError(response)) {
        return rejectWithValue('Failed to find profile')
      }
      dispatch(usersActions.setUsers(response.data))
    })

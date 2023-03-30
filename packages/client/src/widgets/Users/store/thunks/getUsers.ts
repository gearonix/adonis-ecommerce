import { createThunk } from 'shared/types/redux'
import { usersActions } from 'widgets/Users/store/slice/usersReducer'
import { isError } from 'shared/lib/helpers'
import { UsersForm } from 'widgets/Users/types'
import { UsersSelectors } from 'widgets/Users'

export const getUsers = createThunk('profile/getUsers',
    async (values: UsersForm | undefined, { dispatch, extra, rejectWithValue, getState }) => {
      const page = UsersSelectors.page(getState())
      const response = await extra.api.profile.getUsers({ ...values, page })
      if (isError(response)) {
        return rejectWithValue('Failed to find profile')
      }
      dispatch(usersActions.setUsers(response.data))
    })

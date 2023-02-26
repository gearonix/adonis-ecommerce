import {createThunk} from 'shared/types/redux'
import {AuthSelectors} from 'shared/selectors'
import axiosInstance from 'shared/config/axios'
import {userActions} from 'widgets/Profile'

export const getUserById = createThunk('users/GET_USER_BY_ID',
    async (id: string, {dispatch, getState}) => {
      const userId = AuthSelectors.userId(getState())

      const response = await axiosInstance.get(`/users/${id === 'me' ? userId : id}`)
      dispatch(userActions.setUser(response.data))
    })

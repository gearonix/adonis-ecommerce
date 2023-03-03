import { createThunk } from 'shared/types/redux'
import axiosInstance from 'shared/config/axios'
import { userActions } from 'widgets/Profile'


export const getUserById = createThunk('users/GET_USER_BY_ID',
    async (id: string, { dispatch }) => {
      const response = await axiosInstance.get(`/users/${id}`)
      dispatch(userActions.setUser(response.data))
    })

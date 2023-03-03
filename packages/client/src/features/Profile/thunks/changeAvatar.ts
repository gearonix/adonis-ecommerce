import { createThunk } from 'shared/types/redux'
import axiosInstance from 'shared/config/axios'
import { AxiosResponse as Res } from 'shared/types/common'
import { userActions } from 'widgets/Profile'
import { HttpStatusCode } from 'axios'
import EndPoints from 'shared/config/endpoints'


export const changeAvatar = createThunk('users/CHANGE_AVATAR',
    async (avatar: FormData, { dispatch, extra }) => {
      const response = await requestAvatarToServer(avatar)
      if (response.status !== HttpStatusCode.Created) return

      dispatch(userActions.changeUserAvatar(response.data))
    })

const requestAvatarToServer = (avatar: FormData): Res<{ fileUrl: string }> => {
  return axiosInstance.post(EndPoints.USERS.changeUserAvatar, avatar)
}

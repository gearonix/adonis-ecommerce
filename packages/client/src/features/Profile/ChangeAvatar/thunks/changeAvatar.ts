import {createThunk} from "shared/types/redux";
import axiosInstance from "shared/config/axios";
import {AxiosResponse as Res} from "shared/types/helpers";
import {userActions} from "widgets/Profile";
import {HttpStatusCode} from "axios";


export const changeAvatar = createThunk('users/CHANGE_AVATAR',
    async (avatar: FormData, {dispatch}) => {
    const response = await requestAvatarToServer(avatar)
    if (response.status !== HttpStatusCode.Created) return

    dispatch(userActions.changeUserAvatar(response.data))
})

const requestAvatarToServer = (avatar: FormData): Res<{ fileUrl: string }> => {
    return axiosInstance.post('/users/change/avatar', avatar)
}

import {createThunk} from "shared/types/redux";
import axiosInstance from "shared/config/axios";
import {AxiosResponse as Res} from "shared/types/helpers";
import {userActions} from "widgets/Profile";
import {HttpStatusCode} from "axios";


export const changeBackground = createThunk('users/CHANGE_AVATAR',
    async (background: FormData, {dispatch}) => {
        const response = await requestBackgroundToServer(background)
        if (response.status !== HttpStatusCode.Created) return

        dispatch(userActions.changeUserBackground(response.data))
    })

const requestBackgroundToServer = (background: FormData): Res<{ fileUrl: string }> => {
    return axiosInstance.post('/users/change/background', background)
}

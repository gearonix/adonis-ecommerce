import axiosInstance from 'shared/config/consts/axios'
import { AxiosResponse as Res } from 'shared/types/common'
import { EditProfileForm } from 'widgets/Profile/types'
import EndPoints from 'shared/config/consts/endpoints'
import { User } from 'widgets/Profile'


export interface ProfileApi {
    changeUserProfile(formValues: Partial<EditProfileForm>): Res<User>
}

const EndPoint = EndPoints.USERS

const profileApi: ProfileApi = {
  changeUserProfile(formValues) {
    return axiosInstance.post(EndPoint.changeProfileData, formValues)
  }
}


export default profileApi

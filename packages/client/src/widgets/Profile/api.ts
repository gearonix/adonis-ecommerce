import axiosInstance from 'shared/config/axios'
import { AxiosResponse as Res } from 'shared/types/common'
import { EditProfileForm } from 'widgets/Profile/types'
import { User } from 'shared/types/slices'
import EndPoints from 'shared/config/endpoints'


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

import axiosInstance from 'shared/config/axios'
import {AxiosResponse as Res, ObjectOptional} from 'shared/types/common'
import {EditProfileForm} from 'widgets/Profile/types'
import {UserSlice} from 'shared/types/slices'
import EndPoints from 'shared/config/endpoints'


interface ProfileApi {
    changeUserProfile(formValues: ObjectOptional<EditProfileForm>): Res<UserSlice>
}

const EndPoint = EndPoints.USERS

const profileApi: ProfileApi = {
  changeUserProfile(formValues) {
    return axiosInstance.post(EndPoint.changeProfileData, formValues)
  },

}


export default profileApi

import axiosInstance from 'shared/config/consts/axios'
import { AxiosResponse as Res } from 'shared/types/common'
import { EditProfileForm } from 'widgets/Profile/types'
import EndPoints from 'shared/config/consts/endpoints'
import { User } from 'widgets/Profile'
import { NewUsers, UsersForm } from 'widgets/Users/types'
import { Helpers } from 'shared/lib/helpers'
import { UsersSlice } from 'widgets/Users/store/slice/initialState'


export interface ProfileApi {
    changeUserProfile(formValues: Partial<EditProfileForm>): Res<User>,
    getUsers(values?: UsersForm): Res<NewUsers>
}

const EndPoint = EndPoints.USERS

const profileApi: ProfileApi = {
  changeUserProfile(formValues) {
    return axiosInstance.post(EndPoint.changeProfileData, formValues)
  },
  getUsers(values: UsersForm) {
    const helpers = new Helpers()
    const query = values ? `${helpers.toQuery(values)}` : null
    return axiosInstance.get(`${EndPoint.getUsers}?${query}`)
  }
}


export default profileApi

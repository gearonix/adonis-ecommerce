import axiosInstance from 'shared/config/axios';
import {AxiosResponse as Res, ObjectOptional} from 'shared/types/helpers';
import {EditProfileForm} from 'widgets/Profile/types';
import {UserSlice} from 'shared/types/slices';


interface ProfileApi {
    changeUserProfile(formValues: ObjectOptional<EditProfileForm>): Res<UserSlice>
}

const profileApi: ProfileApi = {
  changeUserProfile(formValues) {
    return axiosInstance.post('users/change/profile', formValues);
  },

};


export default profileApi;

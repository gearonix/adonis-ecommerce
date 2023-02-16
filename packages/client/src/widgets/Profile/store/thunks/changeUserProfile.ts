import {createThunk} from 'shared/types/redux';
import {ObjectOptional} from 'shared/types/helpers';
import {EditProfileForm} from '../../types';
import profileApi from '../../profileApi';
import {setUser} from '../../store/userReducer';

export const changeUserProfile = createThunk(
    'users/CHANGE_PROFILE',
    async (formValues: ObjectOptional<EditProfileForm>, {dispatch}) => {
      const response = await profileApi.changeUserProfile(formValues);
      dispatch(setUser(response.data));
    }
);

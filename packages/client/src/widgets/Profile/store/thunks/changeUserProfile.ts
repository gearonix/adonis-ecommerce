import {createThunk} from 'shared/types/redux';
import {ObjectOptional} from 'shared/types/helpers';
import {EditProfileForm} from '../../types';
import profileApi from '../../profileApi';
import {setUser} from '../../store/userReducer';
import isError from "next/dist/lib/is-error";

export const changeUserProfile = createThunk(
    'users/CHANGE_PROFILE',
    async (formValues: ObjectOptional<EditProfileForm>, {dispatch}) => {
      const response = await profileApi.changeUserProfile(formValues);
      if (isError(response)) return
      dispatch(setUser(response.data));
    }
);

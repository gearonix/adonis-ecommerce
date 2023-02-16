import {ReactElement} from 'react';
import {createFieldValues, CreateFieldValues} from 'shared/helpers/others/formHelpers';
import {EditProfileForm} from 'widgets/Profile/types';
import {SubmitHandler} from 'react-hook-form';
import {ObjectNullable} from "shared/types/helpers";
import {UserSlice} from "shared/types/slices";

export interface EditProfileProps {
    ChangeBackground: ReactElement,
    ChangeAvatar: ReactElement,
    close: () => void,
    submitForm: (e: SubmitHandler) => void,
    reg: ReturnType<typeof createFieldValues<EditProfileForm>>,
    user: ObjectNullable<UserSlice>
}

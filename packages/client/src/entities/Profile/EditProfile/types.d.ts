import {ReactElement} from 'react';
import {createFieldValues, CreateFieldValues} from 'shared/helpers/others/formHelpers';
import {EditProfileForm} from 'widgets/Profile/types';
import {Path, SubmitHandler, FieldError} from 'react-hook-form';

export interface EditProfileProps {
    ChangeBackground: ReactElement,
    ChangeAvatar: ReactElement,
    close: () => void,
    submitForm: (e: SubmitHandler) => void,
    reg: ReturnType<typeof createFieldValues<EditProfileForm>>,
    valuesApi: (field: Path<EditProfileForm>) => {
        setValue(value: string): void,
        value: string,
        error: FieldError | undefined
    }
}

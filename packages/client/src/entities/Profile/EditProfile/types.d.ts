import {ReactElement} from 'react';

export interface EditProfileProps {
    ChangeBackground: ReactElement,
    ChangeAvatar: ReactElement,
    close: () => void,
    submitForm: () => void
}

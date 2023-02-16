import {ReactElement} from 'react';
import {ObjectNullable} from 'shared/types/helpers';
import {FormattedUser} from 'widgets/Profile/lib/hooks';

export interface ProfileHeaderTemplate {
    ChangeBackground: ReactElement,
    OpenProfileEdit: ReactElement,
    user: ObjectNullable<FormattedUser>

}

import {ReactElement} from 'react'
import {createFieldValues} from 'shared/lib/helpers/others/formHelpers'
import {EditProfileForm} from 'widgets/Profile/types'
import {ObjectNullable} from 'shared/types/common'
import {UserSlice} from 'shared/types/slices'

export interface EditProfileProps {
    ChangeBackground: ReactElement,
    ChangeAvatar: ReactElement,
    close: () => void,
    submitForm: any,
    reg: ReturnType<typeof createFieldValues<EditProfileForm>>,
    user: ObjectNullable<UserSlice>
}
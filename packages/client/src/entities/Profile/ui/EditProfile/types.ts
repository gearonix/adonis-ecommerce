import { ReactElement } from 'react'
import { createFieldValues } from 'shared/lib/helpers/formHelpers/createFieldValues'
import { EditProfileForm } from 'widgets/Profile/types'
import { ObjectNullable } from 'shared/types/common'
import { User } from 'widgets/Profile'

export interface EditProfileProps {
    ChangeBackground: ReactElement,
    ChangeAvatar: ReactElement,
    close: () => void,
    submitForm: any,
    reg: ReturnType<typeof createFieldValues<EditProfileForm>>,
    user: ObjectNullable<User>
}

import {FC} from 'react'
import {EditProfileTemplate} from 'entities/Profile/EditProfile'
import {ChangeBackground} from 'features/Profile/ChangeBackground'
import {ChangeAvatar} from 'features/Profile/ChangeAvatar'
import {FormProvider, useForm} from 'react-hook-form'
import {EditProfileForm} from '../../types'
import {yupResolver} from '@hookform/resolvers/yup'
import {editProfileSchema} from '../../lib/form/formSchemes'
import {createFieldValues, Helpers} from 'shared/lib/helpers/others'
import {useDispatch, useSelector} from 'shared/types/redux'
import {changeUserProfile} from '../../store/thunks/changeUserProfile'
import UserSelectors from 'shared/selectors/userSelectors'
import {selectEditProfileValues} from 'widgets/Profile/store/selectors'

const EditProfile: FC<{ close: () => void }> = ({close}) => {
  const user = useSelector(UserSelectors.user)
  const initialValues = useSelector(selectEditProfileValues)

  const form = useForm<EditProfileForm>({resolver: yupResolver(editProfileSchema), ...initialValues})
  const reg = createFieldValues<EditProfileForm>(form)
  const dispatch = useDispatch()
  const helpers = new Helpers()

  const onSubmit = (values: EditProfileForm) => {
    const difference = helpers.differenceBetweenObjects(initialValues.defaultValues, values)
    if (difference) {
      dispatch(changeUserProfile(difference))
    }
    close()
  }


  return <FormProvider {...form}>
    <EditProfileTemplate ChangeBackground={<ChangeBackground/>}
      ChangeAvatar={<ChangeAvatar/>} submitForm={form.handleSubmit(onSubmit)}
      close={close} reg={reg} user={user}/>
  </FormProvider>
}

export default EditProfile

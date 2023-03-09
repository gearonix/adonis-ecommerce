import { FC } from 'react'
import { UploadButton } from 'shared/ui/kit'
import { changeAvatar } from '../../thunks/changeAvatar'
import { useDispatch } from 'shared/types/redux'
import { UploadProperties } from 'app/config/globals'
import { withFormData } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'

const ChangeAvatar: FC = () => {
  const dispatch = useDispatch()
  const createFormData = withFormData(UploadProperties.USER_AVATAR)
  const { t } = useTranslation()

  const uploadAvatar = (file: File) => {
    const formData = createFormData(file)
    dispatch(changeAvatar(formData))
  }

  return <UploadButton className="outlined_button"
    handleChange={uploadAvatar}>{t('Change_avatar')}</UploadButton>
}

export default ChangeAvatar

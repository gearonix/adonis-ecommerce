import {FC} from 'react'
import {UploadButton, withFormData} from 'shared/ui/kit'
import {changeAvatar} from '../thunks/changeAvatar'
import {useDispatch} from 'shared/types/redux'
import {UploadProperties} from 'app/config/globals'

const ChangeAvatar: FC = () => {
  const dispatch = useDispatch()
  const createFormData = withFormData(UploadProperties.USER_AVATAR)

  const uploadAvatar = (file: File) => {
    const formData = createFormData(file)
    dispatch(changeAvatar(formData))
  }

  return <UploadButton className="outlined_button"
    handleChange={uploadAvatar}>Change avatar </UploadButton>
}

export default ChangeAvatar

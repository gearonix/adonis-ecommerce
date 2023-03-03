import { ButtonHTMLAttributes, FC } from 'react'
import { BsPen } from 'shared/ui/icons'
import { UploadButton } from 'shared/ui/kit'
import { UploadProperties } from 'app/config/globals'
import { useDispatch, useSelector } from 'shared/types/redux'
import { changeBackground } from 'features/Profile/thunks/changeBackground'
import userSelectors from 'shared/selectors/user'
import { withFormData } from 'shared/lib/helpers'

const ChangeBackground: FC<ButtonHTMLAttributes<HTMLButtonElement>> = () => {
  const dispatch = useDispatch()
  const createFormData = withFormData(UploadProperties.USER_BACKGROUND)
  const isMe = useSelector(userSelectors.isMe)

  const handleBackground = (file: File) => {
    const formData = createFormData(file)
    dispatch(changeBackground(formData))
  }

  return isMe ? <UploadButton className={'primary_button'}
    handleChange={handleBackground}><BsPen/> Change background</UploadButton> : null
}

export default ChangeBackground

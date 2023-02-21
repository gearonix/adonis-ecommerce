import {ButtonHTMLAttributes, FC} from 'react'
import {BsPen} from 'shared/ui/icons'
import {UploadButton, withFormData} from 'shared/ui/kit'
import {UploadProperties} from 'app/config/globals'
import {useDispatch} from 'shared/types/redux'
import {changeBackground} from 'features/Profile/ChangeBackground/thunks/changeBackground'

const ChangeBackground: FC<ButtonHTMLAttributes<HTMLButtonElement>> = () => {
  const dispatch = useDispatch()
  const createFormData = withFormData(UploadProperties.USER_BACKGROUND)

  const handleBackground = (file: File) => {
    const formData = createFormData(file)
    dispatch(changeBackground(formData))
  }

  return <UploadButton className={'primary_button'}
    handleChange={handleBackground}><BsPen/> Change background</UploadButton>
}

export default ChangeBackground

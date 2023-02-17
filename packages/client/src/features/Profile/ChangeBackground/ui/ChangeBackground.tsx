import {ButtonHTMLAttributes, FC} from 'react'
import {BsPen} from 'shared/ui/icons'
import {UploadButton} from 'shared/ui/kit'
import {UploadProperties} from 'app/config/globals'
import {useDispatch} from 'shared/types/redux'
import {changeBackground} from './../thunks/changeBackground'

const ChangeBackground: FC<ButtonHTMLAttributes<HTMLButtonElement>> = () => {
  const dispatch = useDispatch()

  const handleBackground = (formData: FormData) => {
    dispatch(changeBackground(formData))
  }

  return <UploadButton className={'primary_button'}
    mode={UploadProperties.USER_BACKGROUND}
    handleChange={handleBackground}><BsPen/> Change background</UploadButton>
}

export default ChangeBackground

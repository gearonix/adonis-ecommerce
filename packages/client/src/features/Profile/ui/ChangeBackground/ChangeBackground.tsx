import { ButtonHTMLAttributes, FC, memo } from 'react'
import { UploadButton } from 'shared/ui/kit'
import { UploadProperties } from 'app/config/globals'
import { useDispatch, useSelector } from 'shared/types/redux'
import { changeBackground } from 'features/Profile/thunks/changeBackground'
import userSelectors from 'widgets/Profile/store/selectors/profile/profile.selectors'
import { withFormData } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'
import { BsPencil } from 'react-icons/bs'
import s from './style.module.scss'

const ChangeBackground = memo<ButtonHTMLAttributes<HTMLButtonElement>>(() => {
  const dispatch = useDispatch()
  const createFormData = withFormData(UploadProperties.USER_BACKGROUND)
  const isMe = useSelector(userSelectors.isMe)
  const { t } = useTranslation()

  const handleBackground = (file: File) => {
    const formData = createFormData(file)
    dispatch(changeBackground(formData))
  }

  return isMe ? <UploadButton
    handleChange={handleBackground} width={200} className={s.button}>
    <BsPencil/> {t('Change_backgroundNo')}</UploadButton> : null
})

export default ChangeBackground

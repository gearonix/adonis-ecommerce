import s from './../About/style.module.scss'
import { AiOutlineGithub } from 'shared/ui/icons'
import { Button, NextImage } from 'shared/ui/kit'
import { FC, memo } from 'react'
import { Assets } from 'shared/config/consts/assets'
import { useTranslation } from 'react-i18next'

interface AppErrorProps{
    errorInfo: string,
    onRedirect: () => void
}

const AppError = memo<AppErrorProps>(({ errorInfo, onRedirect }) => {
  const { t } = useTranslation()
  return <div className={s.error_container}>
    <h1 className={s.title}>{t('Seems_like')}</h1>
    <p className={s.text}>{t('If_you')}</p>
    <div className={s.image_wrapper}>
      <NextImage src={Assets.APP_ERROR}/>
    </div>
    <button onClick={onRedirect}>{t('Return_to')}</button>
  </div>
})

export default AppError

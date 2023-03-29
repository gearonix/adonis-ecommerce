import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Assets } from 'shared/config/consts/assets'
import { BlueLinkHeader, NextImage } from 'shared/ui/kit'
import s from './style.module.scss'
import { SlPresent } from 'shared/ui/icons'
import { publicAssets } from 'shared/lib/helpers'

const Thanks : FC = () => {
  const { t } = useTranslation()
  return <div className={s.image_block}>
    <BlueLinkHeader label={t('Thanks')} Icon={SlPresent}/>
    <div className={s.thanks_bar}>
      <h2 className={s.title}>{t('Thank you for using my store!')}</h2>
      <div className={s.image_wrapper}>
        <NextImage src={publicAssets(Assets.THANKS)} />
      </div>
    </div>
  </div>
}


export default Thanks

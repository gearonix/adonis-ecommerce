import { FC, memo, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import s from './style.module.scss'
import { backgroundImage, publicAssets } from 'shared/lib/helpers'
import { Assets } from 'shared/config/consts/assets'

export interface Props {
    Form: ReactElement
}


const FindProductSkeleton = memo<Props>(({ Form }) => {
  const { t } = useTranslation()
  return <div className={s.search_form}
    style={backgroundImage(publicAssets(Assets.SEARCH_FORM))}>
    <h1 className={s.title}>{t('You_can_start')}</h1>
    <p className={s.description}>{t('Our_store')}</p>
    {Form}
  </div>
})

export default FindProductSkeleton

import { FC } from 'react'
import s from './style.module.scss'
import { MdOutlineDescription } from 'shared/ui/icons'
import { useTranslation } from 'react-i18next'

export const BlueLinkHeader: FC = () => {
  const { t } = useTranslation()
  return <div className={s.header}>
    <h4><MdOutlineDescription/>{t('Product_description')}</h4>
  </div>
}


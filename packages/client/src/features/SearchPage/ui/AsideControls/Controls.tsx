import { FC, ReactNode } from 'react'
import s from './style.module.scss'
import { BlueLink } from 'shared/ui/kit'
import Typo from 'shared/ui/kit/Typos/Typo/Typo'
import { FieldValues } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'

export interface CategoryProps {
  title: string,
  children: ReactNode,
  values: FieldValues
}


const Controls: FC<CategoryProps> = ({ title, children, values }) => {
  const disableAll = () => {
    values.setValue(undefined)
  }
  const { t } = useTranslation()

  return <div className={s.category}>
    <Typo>{title}</Typo>
    {children}
    <BlueLink onClick={disableAll}>{t('Disable_Group')}</BlueLink>
  </div>
}

export default Controls

import { WithSpring } from 'shared/lib/components'
import s from 'shared/ui/kit/Loaders/DefaultPreloader/style.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface Props{
    Icon: FC,
    title: string
}

export const DefaultPreloader: FC<Props> = ({ Icon, title }) => {
  const { t } = useTranslation()
  return <WithSpring>
    <div className={s.no_products}>
      <h2>{t('There is nothing in the')} {t(title)}</h2>
      <Icon/>
    </div>
  </WithSpring>
}

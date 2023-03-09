import { FC } from 'react'
import { CFC } from 'shared/types/components'
import s from './style.module.scss'
import { CiWarning } from 'react-icons/ci'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

interface NotFoundUIProps{
    title: string,
    Icon: FC,
    w?: number
}

export const NotFound: FC<NotFoundUIProps> = ({ title, Icon, w = 74 }) => {
  const { t } = useTranslation()
  return <div className={s.container} style={{ width: `${w}%` }}>
    <h1 className={s.title}><Icon/> {t('Products is not found')}</h1>
    <p className={s.text}>{t('Try to make a request differently.')}</p>
    <div className={s.image_wrapper}>
      <CiWarning/>
    </div>
    <Link href={routes.MAIN}>
      <h4 className={cn(s.link, 'hover_link')}>
        {t('Return_to')}
      </h4>
    </Link>
  </div>
}


import { FC } from 'react'
import s from './style.module.scss'
import { AiOutlineSearch } from 'shared/ui/icons'
import { backgroundImage, publicAssets } from 'shared/lib/helpers'
import Link from 'next/link'
import { DefaultAssets } from 'shared/config/consts/assets'
import { ApiAnimation } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

interface ExtraServiceProps{
  image: string,
  link: string,
  title: string
}

export const ExtraService: FC<ExtraServiceProps> = ({ image, link, title }) => {
  return <Link className={s.item} href={link}>
    <div className={s.item_image} style={backgroundImage(image)}>
      <div className={s.item_button}>
        <AiOutlineSearch/>
      </div>
    </div>
    <h3 className={s.item_title}>{title}</h3>
  </Link>
}

export const DefaultExtraService: FC = () => {
  const { t } = useTranslation()
  return <ApiAnimation type={'increaseSize'} className={cn(s.item, s.default_project)}>
    <div className={s.item_image} style={backgroundImage(publicAssets(DefaultAssets.PROJECT))}>
      <div className={s.item_button}>
        <AiOutlineSearch/>
      </div>
    </div>
    <h3 className={s.item_title}>{t('Coming_soon..')}</h3>
  </ApiAnimation>
}

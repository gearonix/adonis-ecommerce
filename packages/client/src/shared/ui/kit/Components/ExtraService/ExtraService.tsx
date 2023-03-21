import { FC } from 'react'
import s from './style.module.scss'
import { AiOutlineSearch } from 'shared/ui/icons'
import { backgroundImage } from 'shared/lib/helpers'
import Link from 'next/link'
import { DefaultAssets } from 'shared/config/consts/assets'
import { ApiAnimation } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

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
  return <ApiAnimation type={'increaseSize'} className={s.item}>
    <div className={s.item_image} style={backgroundImage(DefaultAssets.PROJECT)}>
      <div className={s.item_button}>
        <AiOutlineSearch/>
      </div>
    </div>
    <h3 className={s.item_title}>{t('Coming_soon..')}</h3>
  </ApiAnimation>
}

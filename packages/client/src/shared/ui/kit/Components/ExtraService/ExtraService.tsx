import { FC } from 'react'
import s from './style.module.scss'
import { AiOutlineSearch } from 'shared/ui/icons'
import { backgroundImage } from 'shared/lib/helpers'
import Link from 'next/link'
import { DefaultAssets } from 'shared/config/assets'
import { ApiAnimation } from 'shared/lib/components'

interface ExtraServiceProps{
  image: string,
  link: string,
  title: string
}

export const ExtraService: FC<ExtraServiceProps> = ({ image, link, title }) => {
  return <Link href={link}>
    <div className={s.item}>
      <div className={s.item_image} style={backgroundImage(image)}>
        <div className={s.item_button}>
          <AiOutlineSearch/>
        </div>
      </div>
      <h3 className={s.item_title}>{title}</h3>
    </div>
  </Link>
}

export const DefaultExtraService: FC = () => {
  return <ApiAnimation type={'increaseSize'}>
    <div className={s.item}>
      <div className={s.item_image} style={backgroundImage(DefaultAssets.PROJECT)}>
        <div className={s.item_button}>
          <AiOutlineSearch/>
        </div>
      </div>
      <h3 className={s.item_title}>Coming soon...</h3>
    </div>
  </ApiAnimation>
}

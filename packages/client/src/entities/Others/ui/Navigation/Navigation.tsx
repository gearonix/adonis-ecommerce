import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { DefaultAssets } from 'shared/config/consts/assets'
import { AiOutlineShoppingCart } from 'shared/ui/icons'


const Navigation : FC = () => {
  return <div className={s.navigation}>
    <div className={s.header}>
      <div className={s.avatar}>
        <NextImage src={DefaultAssets.AVATAR} />
      </div>
      <h2 className={s.user_name}>User Name</h2>
    </div>
    <div className={s.content}>
      <div className={s.container}>
        <div className={s.link}>
          <AiOutlineShoppingCart />
          <h3>Test link</h3>
        </div>
      </div>
    </div>
  </div>
}


export default Navigation

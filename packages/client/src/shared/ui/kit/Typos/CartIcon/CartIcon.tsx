import { FC } from 'react'
import s from './style.module.scss'
import { CartIconProps } from '../../types'

export const CartIcon: FC<CartIconProps> = ({ Icon, title, subtitle }) => {
  return <div className={s.item}>
    <div className={s.image_wrapper}>
      <Icon/>
    </div>
    <div>
      <h4>{title}</h4>
      <span>{subtitle}</span>
    </div>
  </div>
}


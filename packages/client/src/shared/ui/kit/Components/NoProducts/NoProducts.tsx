import { FC } from 'react'
import s from './style.module.scss'
import { AiOutlineShoppingCart } from 'shared/ui/icons'

export const NoProducts : FC = () => {
  return <div className={s.no_products}>
    <h2 className={s.no_products}>You have not added any products</h2>
    <AiOutlineShoppingCart/>
  </div>
}



import {FC, useContext} from 'react'
import s from './style.module.scss'
import {CartButtons, CartItem} from 'entities/Cart'
import {CartIcons} from 'entities/Banners/CartICons'
import {CardItemsProps} from 'widgets/Cart/types'
import CartContext from 'widgets/Cart/providers/Cart/CartContext'


const CartItems: FC<CardItemsProps> = ({Remove, RemoveAll, Add}) => {
  const {items} = useContext(CartContext)

  return <div style={{width: '50%'}}>
    <div className={s.cart_container}>
      <div className={s.cart_layout}>
        {items.map((product, idx) => {
          return <CartItem Remove={Remove} SaveForLater={Add} key={idx} product={product}/>
        })}
        <CartButtons BackColor={'primary'} RemoveAll={RemoveAll}/>
      </div>
    </div>
    <CartIcons/>
  </div>
}

export default CartItems

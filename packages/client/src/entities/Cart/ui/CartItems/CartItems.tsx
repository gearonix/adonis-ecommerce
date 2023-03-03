import { FC } from 'react'
import { CartButtons, CartItem } from 'entities/Cart'
import s from './style.module.scss'
import { Product } from 'shared/types/slices'
import { SavedProps } from 'features/Saved'
import { CartIcons } from 'entities/Banners'

export interface CartItemsProps{
  Remove?: FC<any>,
  AddToSaved?: FC<SavedProps>,
  RemoveAll?: FC,
  items: Product[],
}


const CartItems : FC<CartItemsProps> = ({ items, RemoveAll, AddToSaved, Remove }) => {
  return <div style={{ width: '50%' }}>
    <div className={s.cart_container}>
      <div className={s.cart_layout}>
        {items.map((product, idx) => {
          return <CartItem Remove={Remove} AddToSaved={AddToSaved} key={idx} product={product}/>
        })}
        <CartButtons BackColor={'primary'} RemoveAll={RemoveAll}/>
      </div>
    </div>
    <CartIcons/>
  </div>
}


export default CartItems

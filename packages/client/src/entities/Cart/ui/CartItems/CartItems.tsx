import { FC } from 'react'
import { CartButtons, CartItem } from 'entities/Cart'
import s from './style.module.scss'
import { Product } from 'shared/types/slices'
import { SavedProps } from 'features/Saved'
import { CartIcons } from 'entities/Banners'
import { AiOutlineShoppingCart as CartIcon } from 'shared/ui/icons'
import { Displayed } from 'shared/lib/components'
import { NoItems } from 'shared/ui/kit'

export interface CartItemsProps{
  Remove?: FC<any>,
  AddToSaved?: FC<SavedProps>,
  RemoveAll?: FC,
  items: Product[],
  title?: string,
  Icon?: FC
}


const CartItems : FC<CartItemsProps> = (props) => {
  const { items, RemoveAll, AddToSaved, Remove, Icon = CartIcon, title = 'Cart' } = props
  return <div style={{ width: '50%' }}>
    <div className={s.cart_container}>
      <div className={s.cart_layout}>
        {items.map((product, idx) => {
          return <CartItem Remove={Remove} AddToSaved={AddToSaved} key={idx} product={product}/>
        })}
        <NoItems condition={!items.length} title={title} Icon={Icon} />

        <CartButtons BackColor={'primary'} RemoveAll={RemoveAll}/>
      </div>
    </div>
    <CartIcons/>
  </div>
}


export default CartItems

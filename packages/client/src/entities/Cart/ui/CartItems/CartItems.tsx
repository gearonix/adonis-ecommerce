import { FC } from 'react'
import { CartButtons, CartItem } from 'entities/Cart'
import s from './style.module.scss'
import { Product } from 'shared/types/slices'
import { SavedProps } from 'features/Saved'
import { CartIcons } from 'entities/Banners'
import { AiOutlineShoppingCart as CartIcon } from 'shared/ui/icons'
import { Display } from 'shared/lib/components'
import { WithLoading } from 'shared/ui/kit'

export interface CartItemsProps{
  Remove?: FC<any>,
  AddToSaved?: FC<SavedProps>,
  RemoveAll?: FC,
  items: Product[],
  title?: string,
  Icon?: FC,
  loading: boolean
}


const CartItems : FC<CartItemsProps> = (props) => {
  const { items, RemoveAll, AddToSaved, Remove, Icon = CartIcon, title = 'Cart' } = props
  return <div style={{ width: '50%' }}>
    <div className={s.cart_container}>
      <div className={s.cart_layout}>

        <WithLoading when={!items.length} title={title} Icon={Icon} loading={false}>
          {items.map((product, idx) => {
            return <CartItem Remove={Remove} AddToSaved={AddToSaved} key={idx} product={product}/>
          })}
        </WithLoading>

        <CartButtons BackColor={'primary'} RemoveAll={RemoveAll}/>
      </div>
    </div>
    <CartIcons/>
  </div>
}


export default CartItems

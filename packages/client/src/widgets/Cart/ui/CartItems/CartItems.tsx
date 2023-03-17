import { memo, useContext } from 'react'
import { CartItemsProps } from 'widgets/Cart/types'
import CartContext from 'widgets/Cart/providers/Cart/CartContext'
import { CartItems as CartItemsTemplate } from 'entities/Cart'

const CartItems = memo<CartItemsProps>(({ Remove, RemoveAll, AddToSaved }) => {
  const { items } = useContext(CartContext)

  return <CartItemsTemplate items={items}
    Remove={Remove} RemoveAll={RemoveAll} AddToSaved={AddToSaved} loading={false}/>
})

export default CartItems

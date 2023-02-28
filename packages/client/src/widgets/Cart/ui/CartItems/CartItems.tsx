import {FC, useContext} from 'react'
import {CartItemsProps} from 'widgets/Cart/types'
import CartContext from 'widgets/Cart/providers/Cart/CartContext'
import {CartItems as CartItemsTemplate} from 'entities/Cart'

const CartItems: FC<CartItemsProps> = ({Remove, RemoveAll, AddToSaved}) => {
  const {items} = useContext(CartContext)
  console.log(items)

  return <CartItemsTemplate items={items} Remove={Remove} RemoveAll={RemoveAll} AddToSaved={AddToSaved}/>
}

export default CartItems

import { createContext } from 'react'
import { Product } from 'widgets/Products'

export interface CartContextProps{
    items: Product[],
    sum: number
}


const CartContext = createContext<CartContextProps>({
  items: [],
  sum: 0
})

export default CartContext

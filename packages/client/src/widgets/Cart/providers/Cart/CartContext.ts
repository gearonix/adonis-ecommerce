import { createContext } from 'react'
import { Product } from 'shared/types/slices'

export interface CartContextProps{
    items: Product[],
    sum: number
}


const CartContext = createContext<CartContextProps>({
  items: [],
  sum: 0
})

export default CartContext

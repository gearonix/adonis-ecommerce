import {FC, ReactNode, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {CartSelectors} from 'shared/selectors'
import {getCartProducts} from 'widgets/Cart/store/thunks/getCartProducts'
import {Product} from 'shared/types/slices'
import CartContext from 'widgets/Cart/providers/Cart/CartContext'
import {Helpers} from 'shared/lib/helpers/others'

const CartProvider : FC<{children: ReactNode}> = ({children}) => {
  const [items, setItems] = useState<Product[]>([])
  const cart = useSelector(CartSelectors.cart)
  const dispatch = useDispatch()
  const helpers = new Helpers()
  const sum = helpers.sum(items.map((product) => product.price))

  useEffect(() => {
    if (helpers.emptyArray(cart)) return setItems([])

    dispatch(getCartProducts(cart)).then(({payload}) => {
      if (payload) {
        setItems(payload as Product[])
      }
    })
  }, [cart])

  return <CartContext.Provider value={{items, sum}}>
    {children}
  </CartContext.Provider>
}


export default CartProvider

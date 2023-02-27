import {FC, useContext} from 'react'
import s from './style.module.scss'
import {useSelector} from 'shared/types/redux'
import {AuthSelectors} from 'shared/selectors'
import CartContext from 'widgets/Cart/providers/Cart/CartContext'


interface CheckoutProps{
  CheckoutButton: FC
}

const Checkout: FC<CheckoutProps> = ({CheckoutButton}) => {
  const userName = useSelector(AuthSelectors.userName)
  const {sum} = useContext(CartContext)
  return <div className={s.checkout_block}>
    <p>{userName}, Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>
    <div className={s.total_block}>
      <h4>Total:</h4>
      <h4>${sum}.00</h4>
    </div>
    <CheckoutButton/>
  </div>
}

export default Checkout

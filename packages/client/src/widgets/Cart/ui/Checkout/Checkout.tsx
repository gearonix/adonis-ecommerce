import { FC, memo, useContext } from 'react'
import s from './style.module.scss'
import CartContext from 'widgets/Cart/providers/Cart/CartContext'
import { useTranslation } from 'react-i18next'


interface CheckoutProps{
  CheckoutButton: FC
}

const Checkout = memo<CheckoutProps>(({ CheckoutButton }) => {
  const { t } = useTranslation()
  const { sum } = useContext(CartContext)
  return <div className={s.checkout_block}>
    <p>{t('Not a real service')} </p>
    <div className={s.total_block}>
      <h4>{t('Total')}</h4>
      <h4>${sum}.00</h4>
    </div>
    <CheckoutButton/>
  </div>
})

export default Checkout

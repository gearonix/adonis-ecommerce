import { forwardRef } from 'react'
import { Button } from 'shared/ui/kit'
import { useDispatch } from 'shared/types/redux'
import { cartActions } from 'widgets/Cart/store/slice/cartReducer'
import { withDelay } from 'shared/lib/helpers/withHelpers/withDelay'
import { useTranslation } from 'react-i18next'

const RemoveFromCart = forwardRef<HTMLButtonElement, {productId: number}>(({ productId }, ref) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const removeFromCard = () => {
    dispatch(cartActions.removeProduct(productId))
  }


  return <Button w={'140px'} color={'redColored'} h={'36px'} ref={ref}
    onClick={withDelay(removeFromCard)}>{t('Remove')}</Button>
})

RemoveFromCart.displayName = 'RemoveFromCart'

export default RemoveFromCart

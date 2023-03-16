import { FC } from 'react'
import { Button } from 'shared/ui/kit'
import { useDispatch, useSelector } from 'shared/types/redux'
import { cartActions } from 'widgets/Cart/store/slice/cartReducer'
import { useTranslation } from 'react-i18next'
import { ProductSelectors } from 'widgets/CurrentProduct'
import { CartSelectors } from 'widgets/Cart'

const CartButton: FC<{productId?: number}> = ({ productId: id }) => {
  const currentProductId = useSelector(ProductSelectors.id) as number
  const productId = id ?? currentProductId
  const isExists = useSelector(CartSelectors.existsInCart(productId))
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onAdd = () => {
    dispatch(cartActions.addProduct(productId))
  }
  const onRemove = () => {
    dispatch(cartActions.removeProduct(productId))
  }


  return isExists ? <Button w={'100%'} onClick={onRemove} color={'red'}>{t('Remove')}t</Button> :
      <Button w={'100%'} onClick={onAdd}>{t('Add_to')}</Button>
}

export default CartButton

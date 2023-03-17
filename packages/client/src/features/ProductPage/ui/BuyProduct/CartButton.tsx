import { FC, memo, useCallback } from 'react'
import { Button } from 'shared/ui/kit'
import { useDispatch, useSelector } from 'shared/types/redux'
import { cartActions } from 'widgets/Cart/store/slice/cartReducer'
import { useTranslation } from 'react-i18next'
import { ProductSelectors } from 'widgets/CurrentProduct'
import { CartSelectors } from 'widgets/Cart'

export interface CartButtonProps{
  productId?: number,
  Component?: FC<CartButtonUIProps>
}

const CartButton = memo<CartButtonProps>(({ productId: id, Component = DefaultCartUI }) => {
  const currentProductId = useSelector(ProductSelectors.id) as number
  const productId = id ?? currentProductId
  const isExists = useSelector(CartSelectors.existsInCart(productId))
  const dispatch = useDispatch()

  const onAdd = useCallback(() => {
    dispatch(cartActions.addProduct(productId))
  },[productId])

  const onRemove = useCallback(() => {
    dispatch(cartActions.removeProduct(productId))
  },[productId])


  return <Component isExists={isExists} onAdd={onAdd} onRemove={onRemove}/>
})

export interface CartButtonUIProps{
  onRemove: () => void,
  onAdd: () => void,
  isExists: boolean
}


const DefaultCartUI: FC<CartButtonUIProps> = ({ onAdd, isExists, onRemove }) => {
  const { t } = useTranslation()
  return isExists ?
      <Button w={'100%'} onClick={onRemove} color={'red'}>{t('Remove')}</Button> :
      <Button w={'100%'} onClick={onAdd}>{t('Add_to')}</Button>
}

export default CartButton

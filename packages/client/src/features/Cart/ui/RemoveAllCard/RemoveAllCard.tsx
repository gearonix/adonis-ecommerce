import { FC } from 'react'
import { Button } from 'shared/ui/kit'
import { useDispatch } from 'shared/types/redux'
import { cartActions } from 'widgets/Cart/store/slice/cartReducer'
import { useTranslation } from 'react-i18next'

const RemoveAllCart: FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const removeAll = () => {
    dispatch(cartActions.removeAll())
  }

  return <Button w={'114px'} color={'blueBordered'} onClick={removeAll}>{t('Remove_all')}</Button>
}

export default RemoveAllCart

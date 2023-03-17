import { forwardRef } from 'react'
import { Button } from 'shared/ui/kit'
import { useDispatch } from 'shared/types/redux'
import { removeProductFromSaved } from 'features/Saved/store/thunks'
import { useTranslation } from 'react-i18next'

const RemoveFromSaved = forwardRef<HTMLButtonElement, {productId: number}>(({ productId }, ref) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onClick = () => {
    dispatch(removeProductFromSaved(productId))
  }

  return <Button w={'180px'} color={'redColored'} h={'32px'} ref={ref} onClick={onClick}>
    {t('Remove')}</Button>
})

RemoveFromSaved.displayName = 'RemoveFromSaved'

export default RemoveFromSaved

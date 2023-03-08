import { FC } from 'react'
import { Button } from 'shared/ui/kit'
import { SharedSavedProps } from 'features/Saved'
import { ApiAnimation } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

const CartSaved: FC<SharedSavedProps> = ({ onClick, isInSaved }) => {
  const { t } = useTranslation()
  return <ApiAnimation type={'increaseSize'} onClick={onClick}>
    <Button w={'170px'} h={'32px'} color={'blueBordered'}>
      {!isInSaved ? t('Save_for') : t('Remove_for_saved')}
    </Button>
  </ApiAnimation>
}

export default CartSaved

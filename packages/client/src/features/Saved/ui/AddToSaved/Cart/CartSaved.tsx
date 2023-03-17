import { FC } from 'react'
import { Button } from 'shared/ui/kit'
import { SquareButtonProps } from 'features/Saved'
import { ApiAnimation } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

const CartSaved: FC<SquareButtonProps> = ({ onClick, isChecked }) => {
  const { t } = useTranslation()
  return <ApiAnimation type={'increaseSize'} onClick={onClick}>
    <Button h={'32px'} color={'blueBordered'}>
      {!isChecked ? t('Save for later') : t('Remove from saved')}
    </Button>
  </ApiAnimation>
}

export default CartSaved

import { FC } from 'react'
import { FiHeart } from 'shared/ui/icons'
import { BlueLink } from 'shared/ui/kit'
import { SquareButtonProps } from 'features/Saved'
import { ApiAnimation } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

const ProductSaved: FC<SquareButtonProps> = ({ onClick, isChecked }) => {
  const { t } = useTranslation()
  return <ApiAnimation type={'increaseSize'}
    style={{ margin: '0 auto', width: '80%', marginTop: '8px' }} onClick={onClick}>
    <BlueLink style={{ margin: '0 auto', marginTop: '8px' }}>
      <FiHeart/> {!isChecked ? t('Save for later') : t('Remove from saved')}</BlueLink>
  </ApiAnimation>
}

export default ProductSaved

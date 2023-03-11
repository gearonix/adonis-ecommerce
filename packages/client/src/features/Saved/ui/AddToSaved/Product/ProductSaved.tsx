import { FC } from 'react'
import { FiHeart } from 'shared/ui/icons'
import { BlueLink } from 'shared/ui/kit'
import { SharedSavedProps } from 'features/Saved'
import { ApiAnimation } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

const ProductSaved: FC<SharedSavedProps> = ({ onClick, isInSaved }) => {
  const { t } = useTranslation()
  return <ApiAnimation type={'increaseSize'}
    style={{ margin: '0 auto', width: '80%', marginTop: '8px' }} onClick={onClick}>
    <BlueLink style={{ margin: '0 auto', marginTop: '8px' }}>
      <FiHeart/> {!isInSaved ? t('Save for later') : t('Remove from saved')}</BlueLink>
  </ApiAnimation>
}

export default ProductSaved

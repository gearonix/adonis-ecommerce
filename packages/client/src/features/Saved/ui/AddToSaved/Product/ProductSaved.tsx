import { FC } from 'react'
import { FiHeart } from 'shared/ui/icons'
import { BlueLink } from 'shared/ui/kit'
import { SharedSavedProps } from 'features/Saved'
import { ApiAnimation } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

const ProductSaved: FC<SharedSavedProps> = ({ onClick, isInSaved }) => {
  const { t } = useTranslation()
  return <ApiAnimation type={'increaseSize'}>
    <div style={{ margin: '0 auto', width: '100%', marginTop: '8px',
      marginLeft: '80px' }}
    onClick={onClick}>
      <BlueLink><FiHeart/> {!isInSaved ? t('Save for later') : t('Remove from saved')}</BlueLink>
    </div>
  </ApiAnimation>
}

export default ProductSaved

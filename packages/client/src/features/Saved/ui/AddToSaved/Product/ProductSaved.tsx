import { FC } from 'react'
import { FiHeart } from 'shared/ui/icons'
import { BlueLink } from 'shared/ui/kit'
import { SharedSavedProps } from 'features/Saved'
import { ApiAnimation } from 'shared/lib/components'

const ProductSaved: FC<SharedSavedProps> = ({ onClick, isInSaved }) => {
  return <ApiAnimation type={'increaseSize'}>
    <div style={{ margin: '0 auto', width: '100%', marginTop: '8px',
      marginLeft: '80px' }}
    onClick={onClick}>
      <BlueLink><FiHeart/> {!isInSaved ? 'Save for later' : 'Remove from saved'}</BlueLink>
    </div>
  </ApiAnimation>
}

export default ProductSaved

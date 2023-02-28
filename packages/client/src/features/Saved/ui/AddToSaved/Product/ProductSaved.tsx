import {FC} from 'react'
import {FiHeart} from 'shared/ui/icons'
import {BlueLink} from 'shared/ui/kit'
import {SharedSavedProps} from 'features/Saved'

const ProductSaved: FC<SharedSavedProps> = ({onClick, isInSaved}) => {
  return <div style={{margin: '0 auto', width: '45%', marginTop: '5px'}}
    onClick={onClick}>
    <BlueLink><FiHeart/> {!isInSaved ? 'Save for later' : 'Remove from saved'}</BlueLink>
  </div>
}

export default ProductSaved

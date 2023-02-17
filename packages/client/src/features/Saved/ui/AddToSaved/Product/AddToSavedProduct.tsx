import {FC} from 'react'
import {FiHeart} from 'shared/ui/icons'
import {BlueLink} from 'shared/ui/kit'

const AddToSavedProduct: FC = () => {
  return <div style={{margin: '0 auto', width: '45%', marginTop: '5px'}}>
    <BlueLink><FiHeart/> Save for later</BlueLink>
  </div>
}

export default AddToSavedProduct

import {FC} from 'react'
import {Button} from 'shared/ui/kit'
import {ApiAnimation} from 'shared/ui/animations'

const AddToSavedCart: FC = () => {
  return <ApiAnimation type={'increaseSize'}>
    <Button w={'114px'} h={'32px'} color={'blueBordered'}>Save for later</Button>
  </ApiAnimation>
}

export default AddToSavedCart

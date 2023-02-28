import {FC} from 'react'
import {Button} from 'shared/ui/kit'
import {ApiAnimation} from 'shared/ui/animations'
import {SharedSavedProps} from 'features/Saved'

const CartSaved: FC<SharedSavedProps> = ({onClick, isInSaved}) => {
  return <ApiAnimation type={'increaseSize'} onClick={onClick}>
    <Button w={'114px'} h={'32px'} color={'blueBordered'}>
      {!isInSaved ? 'Save for later' : 'Remove from saved'}
    </Button>
  </ApiAnimation>
}

export default CartSaved

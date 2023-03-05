import { FC } from 'react'
import { Button } from 'shared/ui/kit'
import { SharedSavedProps } from 'features/Saved'
import { ApiAnimation } from 'shared/lib/components'

const CartSaved: FC<SharedSavedProps> = ({ onClick, isInSaved }) => {
  return <ApiAnimation type={'increaseSize'} onClick={onClick}>
    <Button w={'170px'} h={'32px'} color={'blueBordered'}>
      {!isInSaved ? 'Save for later' : 'Remove from saved'}
    </Button>
  </ApiAnimation>
}

export default CartSaved

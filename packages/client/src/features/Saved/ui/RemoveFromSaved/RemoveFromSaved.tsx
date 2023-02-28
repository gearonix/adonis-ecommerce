import {forwardRef} from 'react'
import {Button} from 'shared/ui/kit'
import {useDispatch} from 'shared/types/redux'
import {removeProductFromSaved} from 'features/Saved/store/thunks'

const RemoveFromSaved = forwardRef<HTMLButtonElement, {productId: number}>(({productId}, ref) => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(removeProductFromSaved(productId))
  }

  return <Button w={'114px'} color={'redColored'} h={'32px'} ref={ref} onClick={onClick}>Remove</Button>
})

RemoveFromSaved.displayName = 'RemoveFromSaved'

export default RemoveFromSaved

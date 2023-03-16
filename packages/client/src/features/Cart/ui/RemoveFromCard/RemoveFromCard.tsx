import { forwardRef } from 'react'
import { Button } from 'shared/ui/kit'
import { useDispatch } from 'shared/types/redux'
import { cartActions } from 'widgets/Cart/store/slice/cartReducer'
import { withDelay } from 'shared/lib/helpers/withHelpers/withDelay'

const RemoveFromCard = forwardRef<HTMLButtonElement, {productId: number}>(({ productId }, ref) => {
  const dispatch = useDispatch()
  const removeFromCard = () => {
    dispatch(cartActions.removeProduct(productId))
  }


  return <Button w={'140px'} color={'redColored'} h={'32px'} ref={ref}
    onClick={withDelay(removeFromCard)}>Remove</Button>
})

RemoveFromCard.displayName = 'RemoveFromCard'

export default RemoveFromCard

import {FC} from 'react'
import {Button} from 'shared/ui/kit'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'
import {cartActions} from 'widgets/Cart/store/cartReducer'

const AddToCart: FC = () => {
  const productId = useSelector(ProductSelectors.id) as number
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(cartActions.addProduct(productId))
  }

  return <Button w={'100%'} onClick={onClick}>Add to Cart</Button>
}

export default AddToCart

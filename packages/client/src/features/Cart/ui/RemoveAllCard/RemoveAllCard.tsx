import {FC} from 'react'
import {Button} from 'shared/ui/kit'
import {useDispatch} from 'shared/types/redux'
import {cartActions} from 'widgets/Cart/store/cartReducer'

const RemoveAllCard: FC = () => {
  const dispatch = useDispatch()

  const removeAll = () => {
    dispatch(cartActions.removeAll())
  }

  return <Button w={'114px'} color={'blueBordered'} onClick={removeAll}>Remove all</Button>
}

export default RemoveAllCard

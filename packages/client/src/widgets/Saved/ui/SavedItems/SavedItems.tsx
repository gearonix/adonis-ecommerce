import {FC, useEffect} from 'react'
import {CartItemsProps} from 'widgets/Cart/types'
import {useDispatch, useSelector} from 'shared/types/redux'
import {getSavedByIds} from 'features/Saved/store/thunks/getSavedByIds'
import {savedActions} from 'features/Saved'
import {UserSelectors, SavedSelectors} from 'shared/selectors'

const SavedItems : FC<CartItemsProps> = ({Remove, AddToSaved, Component}) => {
  const products = useSelector(SavedSelectors.products)
  const savedIds = useSelector(SavedSelectors.saved)
  const userId = useSelector(UserSelectors.selectMyOrUserId)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!userId) return
    dispatch(getSavedByIds(userId))
  }, [savedIds])

  useEffect(() => {
    return () => {
      dispatch(savedActions.clearSavedProducts())
    }
  }, [])


  return Component ? <Component Remove={Remove} AddToSaved={AddToSaved} items={products} /> : null
}


export default SavedItems

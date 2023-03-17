import { FC, memo, useEffect } from 'react'
import { CartItemsProps } from 'widgets/Cart/types'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getSavedByIds } from 'features/Saved/store/thunks/getSavedByIds/getSavedByIds'
import { savedActions, SavedSelectors } from 'features/Saved'
import { FiHeart } from 'shared/ui/icons'
import { UserSelectors } from 'widgets/Profile'

const SavedItems : FC<CartItemsProps> = memo(({ Remove, AddToSaved, Component }) => {
  const products = useSelector(SavedSelectors.products)
  const savedIds = useSelector(SavedSelectors.saved)
  const userId = useSelector(UserSelectors.selectMyOrUserId)
  const isLoading = useSelector(SavedSelectors.isLoading)

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


  return Component ? <Component Remove={Remove} AddToSaved={AddToSaved} items={products}
    Icon={FiHeart} title={'Saved'} loading={isLoading}/> : null
})


export default SavedItems

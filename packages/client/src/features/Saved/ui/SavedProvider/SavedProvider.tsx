import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { addProductToSaved, removeProductFromSaved } from 'features/Saved/store/thunks'
import { useUnauthorized } from 'shared/lib/hooks'
import { SavedSelectors } from 'features/Saved'
import { toast } from 'react-toastify'
import { productActions } from 'widgets/CurrentProduct'


export interface SavedProps{
    productId: number,
    Component: FC<SquareButtonProps>
}

export interface SquareButtonProps {
    onClick?: (arg?: unknown) => void,
    isChecked?: boolean,
    Icon?: FC
}

const SavedProvider: FC<SavedProps> = ({ productId, Component }) => {
  const dispatch = useDispatch()
  const isInSaved = useSelector(SavedSelectors.isInSaved(productId))
  const totalCount = useSelector(SavedSelectors.count)
  const authorized = useUnauthorized()
  const addToSaved = useCallback(() => {
    if (totalCount >= 7) {
      return toast.info('You cannot add more than 10 products.')
    }
    dispatch(addProductToSaved(productId))
    dispatch(productActions.changeSavedCount('add'))
  }, [productId, totalCount])

  const removeFromSaved = () => {
    dispatch(removeProductFromSaved(productId))
    dispatch(productActions.changeSavedCount('remove'))
  }

  const onClick = authorized(() => {
    if (isInSaved) {
      return removeFromSaved()
    }
    addToSaved()
  })


  return <Component onClick={onClick} isChecked={isInSaved}/>
}

export default SavedProvider

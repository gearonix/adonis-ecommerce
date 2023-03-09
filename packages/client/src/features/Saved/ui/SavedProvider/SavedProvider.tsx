import React, { FC } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { addProductToSaved, removeProductFromSaved } from 'features/Saved/store/thunks'
import { SavedSelectors } from 'shared/selectors'
import { useUnauthorized } from 'shared/lib/hooks'


export interface SavedProps{
    productId: number,
    Component: FC<SharedSavedProps>
}

export interface SharedSavedProps{
    onClick: (arg?: unknown) => void,
    isInSaved: boolean
}

const SavedProvider: FC<SavedProps> = ({ productId, Component }) => {
  const dispatch = useDispatch()
  const isInSaved = useSelector(SavedSelectors.isInSaved(productId))
  const authorized = useUnauthorized()
  const addToSaved = () => {
    dispatch(addProductToSaved(productId))
  }

  const removeFromSaved = () => {
    dispatch(removeProductFromSaved(productId))
  }

  const onClick = authorized(() => {
    if (isInSaved) {
      return removeFromSaved()
    }
    addToSaved()
  })


  return <Component onClick={onClick} isInSaved={isInSaved}/>
}

export default SavedProvider

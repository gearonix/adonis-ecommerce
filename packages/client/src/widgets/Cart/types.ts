import {FC} from 'react'
import {SavedProps} from 'features/Saved'
import {CartItemsProps as CartItemsEntity} from 'entities/Cart/ui/CartItems/CartItems'

export interface CartItemsProps {
    Remove?: FC<any>,
    AddToSaved?: FC<SavedProps>,
    RemoveAll?: FC,
    Component?: FC<CartItemsEntity>
}

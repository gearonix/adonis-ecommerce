import {FC, MutableRefObject} from 'react'
import {Product} from 'shared/types/slices'
import {Nullable} from 'shared/types/common'
import {SavedProps} from 'features/Saved'


export interface CartItemProps {
    Remove?: FC<{ ref?: MutableRefObject<undefined>, productId: number }>,
    AddToSaved?: Nullable<FC<SavedProps>>,
    product: Product
}

export interface CartButtonsProps {
    RemoveAll?: FC,
    BackColor: 'primary' | 'green'
}

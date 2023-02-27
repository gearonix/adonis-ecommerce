import {FC, MutableRefObject} from 'react'
import {Product} from 'shared/types/slices'


export interface CartItemProps {
    Remove: FC<{ ref?: MutableRefObject<undefined>, productId: number }>,
    SaveForLater: FC | null,
    product: Product
}

export interface CartButtonsProps {
    RemoveAll: FC,
    BackColor: 'primary' | 'green'
}

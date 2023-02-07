import {FC, MutableRefObject} from 'react';

export interface CheckoutProps {
    CheckoutButton: FC
}

export interface CartItemProps {
    Remove: FC<{ ref?: MutableRefObject<undefined> }>,
    SaveForLater: FC | null,
}

export interface CartButtonsProps {
    RemoveAll: FC,
    BackColor: 'primary' | 'green'
}

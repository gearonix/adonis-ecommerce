import {FC} from "react";

export interface CheckoutProps {
    CheckoutButton: FC
}

export interface CartItemProps {
    Remove: FC,
    SaveForLater: FC | null,
}

export interface CartButtonsProps {
    RemoveAll: FC,
    BackColor: 'primary' | 'green'
}

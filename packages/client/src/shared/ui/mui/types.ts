import {ReactNode} from 'react'
import {FieldValues} from 'shared/lib/helpers/others'

export interface ModalProps {
    isOpen: boolean,
    close: (value: boolean) => void,
    image: string
}

export interface MuiSelectProps {
    title: string,
    values: FieldValues
}

export interface ControlsProps {
    title: string,
    idx?: number,
    values: FieldValues
}

export interface MuiLoginFieldProps {
    title: string,
    isPassword?: boolean,
    readOnly?: boolean,
    values: FieldValues
}

export interface ContentModalProps {
    isOpened: boolean,
    close: () => void,
    children: ReactNode
}

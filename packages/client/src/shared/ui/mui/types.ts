import {ReactNode} from 'react'
import {FieldValues} from 'shared/lib/helpers/others'
import {DefaultAssets} from 'shared/config/assets'

export interface ModalProps {
    isOpen: boolean,
    close: (value: boolean) => void,
    image: string,
    def: DefaultAssets
}

export interface MuiSelectProps {
    title: string,
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

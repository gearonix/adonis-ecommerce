import { FC, ReactNode } from 'react'
import { FieldValues } from 'shared/lib/helpers'
import { DefaultAssets } from 'shared/config/consts/assets'

export interface ModalProps {
    isOpen: boolean,
    close: (value: boolean) => void,
    image: string,
    def?: DefaultAssets
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
    Icon?: FC
    placeholder?: string
}

export interface ContentModalProps {
    isOpened: boolean,
    close: () => void,
    children: ReactNode
}

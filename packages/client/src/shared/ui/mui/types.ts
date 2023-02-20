import {ReactNode} from 'react'
import {UseFormRegisterReturn} from 'react-hook-form'

export interface ModalProps {
    isOpen: boolean,
    close: (value: boolean) => void,
    image: string
}

export interface MuiSelectProps {
    value: string,
    values: string[],
    label: string,
    handleChange: (value: string) => void
}

export interface ControlsProps {
    title: string,
    idx?: number
}

export interface MuiLoginFieldProps {
    title: string,
    isPassword?: boolean,
    readOnly?: boolean,
    values: {
        inputProps: UseFormRegisterReturn<string>,
        error: any
    }
}

export interface ContentModalProps {
    isOpened: boolean,
    close: () => void,
    children: ReactNode
}

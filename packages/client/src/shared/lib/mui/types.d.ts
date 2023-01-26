import {ReactNode} from "react";

export interface ModalProps {
    isOpen: boolean,
    handleOpen: (value: boolean) => void,
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
    idx: number
}

export interface MuiLoginFieldProps {
    title: string,
    isPassword?: boolean,
    readOnly?: boolean
}

export interface ContentModalProps {
    isOpened: boolean,
    close: () => void,
    children: ReactNode
}

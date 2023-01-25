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

export interface ModalProps {
    isOpen: boolean,
    handleOpen: (value: boolean) => void,
    image: string
}


export interface MuiLoginFieldProps {
    title: string,
    isPassword?: boolean,
    readOnly? : boolean
}

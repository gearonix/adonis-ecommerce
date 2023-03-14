import { FC } from 'react'

export type ColorType = 'red' | 'green' | 'primary' | 'orange' | 'outlined' | 'blueBordered'
    | 'redColored' | 'greyBordered'


export interface CartIconProps {
    Icon: FC,
}

export interface MessageProps {
    isMine?: boolean,
    message: string,
    image?: string,
    time: string
}

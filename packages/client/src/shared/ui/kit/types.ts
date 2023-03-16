import { FC } from 'react'
import { Message } from 'widgets/Messenger'

export type ColorType = 'red' | 'green' | 'primary' | 'orange' | 'outlined' | 'blueBordered'
    | 'redColored' | 'greyBordered'


export interface CartIconProps {
    Icon: FC,
}

export interface MessageProps {
    isMine?: boolean,
    message: Message,
}

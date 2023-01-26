import {FC, ReactNode} from 'react';
import s from './style.module.scss'

interface HoverLinkProps {
    children: ReactNode,
    bold?: boolean,
}

export const HoverLink: FC<HoverLinkProps> = ({children, bold}) => {
    return <a className={s.hover_link} style={{fontWeight: bold ? 'bold' : 'normal'}}>
        {children}
    </a>
}

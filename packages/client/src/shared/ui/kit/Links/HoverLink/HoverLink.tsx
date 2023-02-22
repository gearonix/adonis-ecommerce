import {FC, HTMLAttributes, ReactNode} from 'react'
import s from './style.module.scss'

interface HoverLinkProps extends HTMLAttributes<HTMLAnchorElement>{
    children: ReactNode,
    bold?: boolean,
}

export const HoverLink: FC<HoverLinkProps> = ({children, bold, onClick = () => {}}) => {
  return <a className={s.hover_link} style={{fontWeight: bold ? 'bold' : 'normal'}} onClick={onClick}>
    {children}
  </a>
}

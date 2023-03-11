import { FC, HTMLAttributes } from 'react'
import s from './style.module.scss'
import { HoverLink } from 'shared/ui/kit'


export const BlueLink: FC<HTMLAttributes<HTMLAnchorElement>> = ({ children, onClick = () => {}, style }) => {
  return <div className={s.link} style={style}>
    <HoverLink onClick={onClick}>{children}</HoverLink>
  </div>
}


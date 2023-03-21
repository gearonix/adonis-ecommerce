import { FC, HTMLAttributes } from 'react'
import s from './style.module.scss'
import { HoverLink } from 'shared/ui/kit'
import cn from 'classnames'


export const BlueLink: FC<HTMLAttributes<HTMLAnchorElement>> = ({ children,
  onClick = () => {}, style, className }) => {
  return <div className={cn(s.link, className)} style={style}>
    <HoverLink onClick={onClick}>{children}</HoverLink>
  </div>
}


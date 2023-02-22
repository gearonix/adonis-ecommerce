import {FC, HTMLAttributes} from 'react'
import s from './style.module.scss'
import {HoverLink} from 'shared/ui/kit'


export const BlueLink: FC<HTMLAttributes<HTMLAnchorElement>> = ({children, onClick = () => {}}) => {
  return <div className={s.link}>
    <HoverLink onClick={onClick}>{children}</HoverLink>
  </div>
}


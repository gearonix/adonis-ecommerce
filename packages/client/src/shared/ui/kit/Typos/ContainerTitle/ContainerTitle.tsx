import s from './style.module.scss'
import { CFC } from 'shared/types/components'
import cn from 'classnames'


export const ContainerTitle: CFC<{ className?: string }> = ({ children, className }) => {
  return <h2 className={cn(s.title, className)}>{children}</h2>
}


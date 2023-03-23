import s from './style.module.scss'
import { CFC } from 'shared/types/components'
import cn from 'classnames'

interface Props{
  className?: string,
  disappears?: boolean
}

export const ContainerTitle: CFC<Props> = ({ children, className, disappears }) => {
  return <h2 className={cn(s.title, className, { [s.disappears]: disappears })}>{children}</h2>
}


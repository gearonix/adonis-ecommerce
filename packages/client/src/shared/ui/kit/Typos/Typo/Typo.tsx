import s from './style.module.scss'
import { CFC } from 'shared/types/components'
import cn from 'classnames'

interface TypoProps{
  grey?: boolean,
  className?: string
}

const Typo: CFC<TypoProps> = ({ children, grey, className }) => {
  return <h4 className={cn(!grey ? s.typo : s.typo_grey, className)}
    style={{ marginBottom: 5 }}>{children}</h4>
}

export default Typo

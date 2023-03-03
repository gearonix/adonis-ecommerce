import { FC } from 'react'
import s from './style.module.scss'
import { AiOutlineCheck } from 'shared/ui/icons'

const Advantage: FC<{title: string}> = ({ title }) => {
  return <h4 className={s.advantage}>
    <AiOutlineCheck/> {title}
  </h4>
}

export default Advantage

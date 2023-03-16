import { FC } from 'react'
import { WithSpring } from 'shared/lib/components'
import s from './style.module.scss'
import { AiOutlineArrowDown } from 'react-icons/ai'

export const ScrollToBottom: FC<{onClick: () => void}> = ({ onClick }) => {
  return <WithSpring onClick={onClick}>
    <div className={s.scrollToBottom}><AiOutlineArrowDown/></div>
  </WithSpring>
}

import { FC } from 'react'
import s from './style.module.scss'
import { GiHamburgerMenu } from 'shared/ui/icons'
import { ApiAnimation } from 'shared/lib/components'

export interface BurgerProps{
  onOpen: () => void
}

const Burger: FC<BurgerProps> = ({ onOpen }) => {
  return <ApiAnimation className={s.burger} onClick={onOpen} type={'reverseScale'}>
    <GiHamburgerMenu/>
  </ApiAnimation>
}

export default Burger

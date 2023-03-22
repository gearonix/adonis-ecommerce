import { FC } from 'react'
import s from './style.module.scss'
import { GiHamburgerMenu } from 'shared/ui/icons'

export interface BurgerProps{
  onOpen: () => void
}

const Burger: FC<BurgerProps> = ({ onOpen }) => {
  return <div className={s.burger} onClick={onOpen}>
    <GiHamburgerMenu/>
  </div>
}

export default Burger

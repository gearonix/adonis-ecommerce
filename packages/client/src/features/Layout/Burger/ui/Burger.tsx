import {FC} from 'react'
import s from './style.module.scss'
import {GiHamburgerMenu} from 'shared/ui/icons'

const Burger: FC = () => {
  return <div className={s.burger}>
    <GiHamburgerMenu/>
  </div>
}

export default Burger

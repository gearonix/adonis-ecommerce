import { HeaderSearch } from 'features/SearchPage'
import { FC } from 'react'
import { Burger } from 'features/Layout'
import { SwitchTheme } from 'features/Layout'
import { Header as HeaderTemplate } from 'entities/Others'


const Header: FC = () => {
  return <HeaderTemplate Search={HeaderSearch} DropDowns={SwitchTheme} Burger={Burger}/>
}

export default Header

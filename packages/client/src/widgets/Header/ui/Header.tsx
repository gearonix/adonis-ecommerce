import { SearchProductsForm } from 'features/SearchPage'
import { FC } from 'react'
import { Burger } from 'features/Layout'
import { SwitchTheme } from 'features/Layout'
import { Header as HeaderTemplate } from 'entities/Others'
import { HeaderInput } from 'shared/ui/kit'


const Header: FC = () => {
  return <HeaderTemplate
    Search={() => <SearchProductsForm Component={HeaderInput}/>}
    DropDowns={SwitchTheme} Burger={Burger}/>
}

export default Header

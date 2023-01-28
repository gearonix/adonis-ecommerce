import {SwitchThemeDrops} from 'features/Layout/SwitchTheme';
import {HeaderSearch} from 'features/SearchPage/HeaderSearch';
import {HeaderSkeleton} from "entities/Others/Layout/Header";
import {FC} from 'react'


const Header: FC = () => {
    return <HeaderSkeleton Search={HeaderSearch} DropDowns={SwitchThemeDrops}/>
}

export default Header

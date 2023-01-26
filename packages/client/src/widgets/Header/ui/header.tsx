import {SwitchThemeDrops} from 'src/features/Layout/SwitchTheme';
import {HeaderSearch} from 'src/features/SearchPage/HeaderSearch';
import {HeaderSkeleton} from "src/entities/Layout/Header";
import {FC} from 'react'


const Header: FC = () => {
    return <HeaderSkeleton Search={HeaderSearch} DropDowns={SwitchThemeDrops}/>
}

export default Header

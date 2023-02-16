import {SwitchThemeDrops} from 'features/Layout/SwitchTheme';
import {HeaderSearch} from 'features/SearchPage/HeaderSearch';
import {HeaderSkeleton} from 'entities/Others/Layout/Header';
import {FC} from 'react';
import {Burger} from 'features/Layout/Burger';


const Header: FC = () => {
  return <HeaderSkeleton Search={HeaderSearch} DropDowns={SwitchThemeDrops} Burger={Burger}/>;
};

export default Header;

import { FC } from 'react'
import s from './style.module.scss'
import { FaHeart, FaInfo, FaShoppingCart, FaUserAlt, GiHamburgerMenu, MdMessage } from 'shared/ui/icons'
import Link from 'next/link'
import { HoverLink, Logo } from 'shared/ui/kit'

export interface HeaderSkeletonProps {
  Search: FC,
  DropDowns: FC,
  Burger: FC
}


const Header: FC<HeaderSkeletonProps> = ({ DropDowns, Burger, Search }) => {
  return <>
    <header className={s.header}>
      <div className={s.header_block}>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Burger/>
          <Link href={'/'} className={s.logo_link}>
            <Logo/>
          </Link>
        </div>
        <Search/>
        <div className={s.options}>
          <div className={s.options_item}>
            <FaUserAlt/>
            <span>Profile</span>
          </div>
          <div className={s.options_item}>
            <MdMessage/>
            <span>Message</span>
          </div>
          <div className={s.options_item}>
            <FaHeart/>
            <span>Orders</span>
          </div>
          <div className={s.options_item}>
            <FaShoppingCart/>
            <span>My cart</span>
          </div>
        </div>
      </div>
      <div className={s.navbar_block}>
        <nav className={s.navbar}>
          <HoverLink><GiHamburgerMenu/> All category</HoverLink>
          <HoverLink><MdMessage/> Messages</HoverLink>
          <HoverLink><FaInfo/> About</HoverLink>
        </nav>
        <DropDowns/>
      </div>
    </header>

  </>
}

export default Header

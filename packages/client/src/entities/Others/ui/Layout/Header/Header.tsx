import { FC } from 'react'
import s from './style.module.scss'
import { AiOutlineSearch, FaHeart, FaInfo, FaShoppingCart, FaUserAlt, MdMessage } from 'shared/ui/icons'
import Link from 'next/link'
import { HoverLink, Logo } from 'shared/ui/kit'
import { routes } from 'shared/config/consts/routes'
import { Switcher } from 'shared/ui/material'
import { useTheme } from 'shared/lib/hooks'
import { useTranslation } from 'react-i18next'

export interface HeaderSkeletonProps {
  Search: FC,
  DropDowns: FC,
  Burger: FC
}


const Header: FC<HeaderSkeletonProps> = ({ DropDowns, Burger, Search }) => {
  const { t } = useTranslation()
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
          <Link className={s.options_item} href={routes.LOGIN}>
            <FaUserAlt/>
            <span>{t('Profile')}</span>
          </Link>
          <Link className={s.options_item} href={routes.MESSENGER}>
            <MdMessage/>
            <span>{t('Messenger')}</span>
          </Link>
          <Link className={s.options_item} href={routes.SAVED}>
            <FaHeart/>
            <span>{t('Orders')}</span>
          </Link>
          <Link className={s.options_item} href={routes.CART}>
            <FaShoppingCart/>
            <span>{t('My_Cart')}</span>
          </Link>
        </div>
      </div>
      <div className={s.navbar_block}>
        <nav className={s.navbar}>
          <Link href={routes.SEARCH}>
            <HoverLink><AiOutlineSearch/> {t('Search')}</HoverLink>
          </Link>
          <Link href={routes.MESSENGER}>
            <HoverLink><MdMessage/> {t('Messages')}</HoverLink>
          </Link>
          <Link href={routes.ABOUT}>
            <HoverLink><FaInfo/> {t('About')}</HoverLink>
          </Link>
        </nav>
        <DropDowns/>
      </div>
    </header>

  </>
}

export default Header

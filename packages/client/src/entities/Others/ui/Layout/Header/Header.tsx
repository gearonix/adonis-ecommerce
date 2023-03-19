import { FC, memo } from 'react'
import s from './style.module.scss'
import { AiOutlineSearch, FaHeart, FaInfo, FaShoppingCart, FaUserAlt, MdMessage } from 'shared/ui/icons'
import Link from 'next/link'
import { HoverLink, Logo, NextImage } from 'shared/ui/kit'
import { routes } from 'shared/config/consts/routes'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'widgets/Login'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Display, Ternary } from 'shared/lib/components'

export interface HeaderSkeletonProps {
  Search: FC,
  DropDowns: FC,
  Burger: FC
}


const Header: FC<HeaderSkeletonProps> = memo(({ DropDowns, Burger, Search }) => {
  const { t } = useTranslation()
  const avatar = useSelector(AuthSelectors.avatar)
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
            <Ternary where={avatar}>
              <div className={s.avatar}>
                <NextImage src={avatar} def={DefaultAssets.AVATAR}/>
              </div>
              <FaUserAlt/>
            </Ternary>
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
})

export default Header

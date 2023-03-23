import { FC, memo } from 'react'
import s from './style.module.scss'
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  FaHeart,
  FaInfo,
  FaShoppingCart,
  FaUserAlt,
  MdMessage
} from 'shared/ui/icons'
import Link from 'next/link'
import { HoverLink, Logo, NextImage } from 'shared/ui/kit'
import { routes } from 'shared/config/consts/routes'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'widgets/Login'
import { DefaultAssets } from 'shared/config/consts/assets'
import { ApiAnimation, Display, Ternary } from 'shared/lib/components'
import { HiUsers } from 'react-icons/hi'
import { useBooleanState } from 'shared/lib/hooks'
import Navigation from '../../Navigation/Navigation'
import { BurgerProps } from 'features/Layout/ui/Burger/Burger'
import cn from 'classnames'

export interface HeaderSkeletonProps {
  Search: FC,
  DropDowns: FC,
  Burger: FC<BurgerProps>
}


const Header: FC<HeaderSkeletonProps> = memo(({ DropDowns, Burger, Search }) => {
  const { t } = useTranslation()
  const avatar = useSelector(AuthSelectors.avatar)
  const navigation = useBooleanState()
  return <>
    <header className={s.header}>
      <Display when={navigation.isOpen}>
        <Navigation onClose={navigation.close}/>
      </Display>
      <div className={s.header_block}>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Burger onOpen={navigation.open}/>
          <Link href={'/'} className={s.logo_link}>
            <Logo/>
          </Link>
        </div>
        <Search/>
        <div className={s.options}>
          <Link className={cn(s.options_item, s.mobile)} href={routes.LOGIN}>
            <Ternary where={avatar}>
              <ApiAnimation className={s.avatar} type={'increaseSize'}>
                <NextImage src={avatar} def={DefaultAssets.AVATAR}/>
              </ApiAnimation>
              <>
                <FaUserAlt className={'desktop'}/>
                <AiOutlineUser className={'mobile'}/>
              </>
            </Ternary>
            <span>{t('Profile')}</span>
          </Link>
          <Link className={cn(s.options_item, 'desktop')} href={routes.MESSENGER}>
            <MdMessage className={'desktop'}/>
            <span>{t('Messenger')}</span>
          </Link>
          <Link className={cn(s.options_item, 'desktop')} href={routes.SAVED}>
            <FaHeart/>
            <span>{t('Orders')}</span>
          </Link>
          <Link className={s.options_item} href={routes.CART}>
            <FaShoppingCart className={'desktop'}/>
            <AiOutlineShoppingCart className={'mobile'}/>
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
            <HoverLink className={s.messenger}><MdMessage/> {t('Messages')}</HoverLink>
          </Link>
          <Link href={routes.USERS}>
            <HoverLink><HiUsers/> {t('Users')}</HoverLink>
          </Link>
          <Link href={routes.CART}>
            <HoverLink><AiOutlineShoppingCart/> {t('My_Cart')}</HoverLink>
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

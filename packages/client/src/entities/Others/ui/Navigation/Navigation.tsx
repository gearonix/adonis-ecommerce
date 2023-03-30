import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Ternary, WithSpring } from 'shared/lib/components'
import { useDispatch, useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'widgets/Login'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { getUserName } from 'entities/Others/lib/getUserName'
import { useLanguage, useLockScroll, useTheme } from 'shared/lib/hooks'
import { AiOutlineBars, AiOutlineHeart, CiLogin,
  BiMessageDetail, BiUser, FiUsers, BsMoon, TbLanguage,
  AiOutlineHome, AiOutlineShoppingCart, BsInfoLg } from 'shared/ui/icons'
import { SlLogout } from 'react-icons/sl'
import { logoutUser } from 'widgets/Login/store/thunks'

interface NavigationProps{
  onClose: () => void
}

const Navigation : FC<NavigationProps> = ({ onClose }) => {
  const avatar = useSelector(AuthSelectors.avatar)
  const userName = useSelector(AuthSelectors.userName)
  const userId = useSelector(AuthSelectors.userId)
  const { toggleTheme } = useTheme()
  const { toggleLang, t } = useLanguage()
  useLockScroll()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logoutUser())
    onClose()
  }

  return <>
    <WithSpring className={s.background} type={'partialOpacity'} onClick={onClose}/>
    <WithSpring className={s.navigation} type={'burgerMenu'}>
      <div className={s.header}>
        <div className={s.logout} onClick={logout}><SlLogout/></div>
        <div className={s.avatar}>
          <NextImage src={avatar} def={DefaultAssets.AVATAR}/>
        </div>
        <h2 className={s.user_name}>{getUserName(userName)}</h2>
      </div>
      <div className={s.content}>
        <div className={s.container} onClick={onClose}>
          <Link className={s.link} href={routes.MAIN}>
            <AiOutlineHome />
            <h3>{t('Home')}</h3>
          </Link>
          <Ternary where={userId}>
            <Link className={s.link} href={routes.LOGIN}>
              <BiUser />
              <h3>{t('Profile')}</h3>
            </Link>
            <Link className={s.link} href={routes.LOGIN}>
              <CiLogin />
              <h3>{t('Sign in')}</h3>
            </Link>
          </Ternary>
          <Link className={s.link} href={routes.SEARCH}>
            <AiOutlineBars />
            <h3>{t('Categories')}</h3>
          </Link>
          <Link className={s.link} href={routes.MESSENGER}>
            <BiMessageDetail />
            <h3>{t('Messenger')}</h3>
          </Link>
        </div>
        <div className={s.container} onClick={onClose}>
          <Link className={s.link} href={routes.SAVED}>
            <AiOutlineHeart />
            <h3>{t('Orders')}</h3>
          </Link>
          <Link className={s.link} href={routes.USERS}>
            <FiUsers />
            <h3>{t('Users')}</h3>
          </Link>
          <Link className={s.link} href={routes.CART}>
            <AiOutlineShoppingCart />
            <h3>{t('My Cart')}</h3>
          </Link>
        </div>
        <div className={s.container} onClick={onClose}>
          <Link className={s.link} href={routes.ABOUT}>
            <BsInfoLg />
            <h3>{t('About_project')}</h3>
          </Link>
          <div className={s.link} onClick={toggleTheme}>
            <BsMoon />
            <h3>{t('Switch Theme')}</h3>
          </div>
          <div className={s.link} onClick={toggleLang}>
            <TbLanguage />
            <h3>{t('Switch language')}</h3>
          </div>
        </div>
        <h2 className={s.footer_text}>Gearonix 2023</h2>
      </div>
    </WithSpring>
  </>
}


export default Navigation

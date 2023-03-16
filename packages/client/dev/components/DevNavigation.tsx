import Link from 'next/link'
import { FC } from 'react'
import { logoutUser } from 'widgets/Login/store/thunks'
import { useDispatch, useSelector } from 'shared/types/redux'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { useTranslation } from 'react-i18next'
import { AuthSelectors } from 'widgets/Login'

// !!!
// This file is for development mode only.

const DevNavigation: FC = () => {
  const dispatch = useDispatch()
  const { toggleTheme } = useTheme()
  const userId = useSelector(AuthSelectors.userId)
  const { i18n } = useTranslation()

  const logout = async () => {
    dispatch(logoutUser())
  }

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }


  return process.env.IS_DEV ?
      <div style={{ position: 'fixed', left: 0, bottom: 0, cursor: 'pointer', zIndex: 1000 }}>
        <Link href={'/'}>
          <button>main</button>
        </Link>
        <Link href={'/search'}>
          <button>search</button>
        </Link>
        <Link href={'/search/10'}>
          <button>item</button>
        </Link>
        <Link href={'/cart'}>
          <button>cart</button>
        </Link>
        <Link href={'/login'}>
          <button>login</button>
        </Link>
        <Link href={'/signup'}>
          <button>signup</button>
        </Link>
        <Link href={'/signup/customer'}>
          <button>customer</button>
        </Link>
        <Link href={'/signup/salesman'}>
          <button>salesman</button>
        </Link>
        <Link href={'/messenger'}>
          <button>messenger</button>
        </Link>
        <Link href={'/saved'}>
          <button>saved</button>
        </Link>
        <Link href={userId ? `/users/${userId}` : '/login'}>
          <button>profile</button>
        </Link>
        <Link href={`/users/66`}>
          <button>user_66</button>
        </Link>
        <Link href={'/about'}>
          <button>about</button>
        </Link>
        <Link href={'/not_found'}>
          <button>not_found</button>
        </Link>
        <button onClick={logout} style={{ color: '#83a6de' }}>logout</button>
        <button style={{ color: '#83a6de' }} onClick={toggleTheme}>theme</button>
        <button style={{ color: '#83a6de' }} onClick={changeLanguage}>lang</button>
      </div> : null
}


export default DevNavigation

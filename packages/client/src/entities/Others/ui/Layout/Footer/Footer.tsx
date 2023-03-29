import { FC, memo } from 'react'
import s from './style.module.scss'
import { AiOutlineGithub } from 'shared/ui/icons'
import { HoverLink, NextImage } from 'shared/ui/kit'
import { Assets } from 'shared/config/consts/assets'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { MyLinks } from 'shared/config/consts/myLinks'
import { SlSocialVkontakte } from 'react-icons/sl'
import { BsTelegram } from 'react-icons/bs'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { useLanguage, useTheme } from 'shared/lib/hooks'
import { publicAssets } from 'shared/lib/helpers'

const Footer: FC = memo(() => {
  const { t, isEnglish } = useLanguage()
  const { isLight } = useTheme()
  return <footer className={s.footer}>
    <div className={s.footer_block}>
      <div className={s.brand_block}>
        <div className={s.brand_logo}>
          <NextImage src={publicAssets(isLight ? Assets.LOGO_LIGHT : Assets.LOGO_DARK)}/>
        </div>
        <p className={s.brand_text}>
          {t('Why_are')}
        </p>
        <div className={s.icon_block}>
          <Link href={MyLinks.GITHUB}>
            <div className={s.icon}>
              <AiOutlineGithub color={'#171515'}/>
            </div>
          </Link>
          <Link href={MyLinks.VK}>
            <div className={s.icon}>
              <SlSocialVkontakte color={'#4C75A3'}/>
            </div>
          </Link>
          <Link href={MyLinks.TELEGRAM}>
            <div className={s.icon}>
              <BsTelegram color={'#0088cc'}/>
            </div>
          </Link>
          <Link href={MyLinks.PORTFOLIO}>
            <div className={s.icon}>
              <HiOutlineDesktopComputer color={'#424040'}/>
            </div>
          </Link>


        </div>
      </div>
      <nav className={s.navbar}>
        <div className={s.navbar_item}>
          <Link href={routes.SEARCH}>
            <HoverLink bold>{t('Search')}</HoverLink> <br/>
          </Link>
          <Link href={routes.ABOUT}>
            <HoverLink>{t('About_project')}</HoverLink> <br/>
          </Link>
        </div>
        <div className={s.navbar_item}>
          <Link href={routes.CART}>
            <HoverLink bold>{t('My_Cart')}</HoverLink> <br/>
          </Link>
          <Link href={routes.SAVED}>
            <HoverLink>{t('Saved_products')}</HoverLink> <br/>
          </Link>
        </div>
        <div className={s.navbar_item}>
          <Link href={routes.MESSENGER}>
            <HoverLink bold>{t('Messenger')}</HoverLink> <br/>
          </Link>
          <Link href={routes.LOGIN}>
            <HoverLink>{t('Log_in')}</HoverLink> <br/>
          </Link>
        </div>
        <div className={s.navbar_item}>
          <Link href={routes.LOGIN}>
            <HoverLink bold>{t('My_Profile')}</HoverLink> <br/>
          </Link>
          <Link href={routes.USERS}>
            <HoverLink>{t('Users')}</HoverLink><br/>
          </Link>
        </div>
      </nav>
      <Link href={MyLinks.PROJECT}>
        <div className={s.github_block}>
          <HoverLink>{t('Github')}</HoverLink>
          <AiOutlineGithub/>
        </div>
      </Link>
    </div>
    <div className={s.footer_bottom}>
      <div className={s.footer_bottom_block}>
        <Link href={MyLinks.PORTFOLIO}>
          <HoverLink>@ Egor Uzhanin (Gearonix). 2023</HoverLink>
        </Link>
        <HoverLink>{isEnglish ? 'English': 'Russian'}</HoverLink>
      </div>
    </div>
  </footer>
})

export default Footer

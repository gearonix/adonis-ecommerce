import s from './style.module.scss'
import { AiOutlineGithub } from 'shared/ui/icons'
import { NextImage } from 'shared/ui/kit'
import Link from 'next/link'
import { MyLinks } from 'shared/config/consts/myLinks'
import { routes } from 'shared/config/consts/routes'
import { Assets } from 'shared/config/consts/assets'
import { SlSocialVkontakte } from 'react-icons/sl'
import { BsTelegram } from 'react-icons/bs'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

const About = memo(() => {
  const { t } = useTranslation()
  return <div className={s.container}>
    <h1 className={s.title}>{t('About_project')}</h1>
    <p className={s.text}>
      {t('The_project')}
      <br/>
    </p>
    <p className={s.text}>
      {t('Detailed_description')} <Link href={MyLinks.PORTFOLIO}><span>{t('here')}. <br/></span></Link>
      {t('links')}
    </p>
    <Link href={MyLinks.PROJECT}>
      <div className={s.github_icon}>
        <AiOutlineGithub/>
      </div>
    </Link>
    <ul className={s.links}>
      <Link href={MyLinks.PORTFOLIO}
        className={'hover_link'}>
        <HiOutlineDesktopComputer />
        {t('My_portfolio')}
      </Link>
      <Link href={MyLinks.VK} className={'hover_link'}>
        <SlSocialVkontakte color={'#4C75A3'}/>
        {t('VK')}</Link>
      <Link href={MyLinks.TELEGRAM}
        className={'hover_link'}>
        <BsTelegram color={'#0088cc'}/>
        {t('Telegram')}</Link>
      <Link href={MyLinks.GITHUB} className={'hover_link'}>
        <AiOutlineGithub />
        {t('My_Github')}</Link>
    </ul>

    <div className={s.image_wrapper}>
      <NextImage src={Assets.ABOUT}/>
    </div>
    <Link href={routes.MAIN}>
      <h4 className={s.link}>
        {t('Return_to')}
      </h4>
    </Link>
  </div>
})

export default About

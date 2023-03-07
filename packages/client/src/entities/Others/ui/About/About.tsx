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

const About = () => {
  return <div className={s.container}>
    <h1 className={s.title}>About project</h1>
    <p className={s.text}>
        The project was developed in 2023 by Uzhanin Egor (Gearonix). <br/>
        The development took more than two months. <br/>

    </p>
    <p className={s.text}>
        Detailed description about development difficulties, technology stack
        and much more you can read <Link href={MyLinks.PORTFOLIO}><span>here</span></Link>.
        Links:
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
        My portfolio
      </Link>
      <Link href={MyLinks.VK} className={'hover_link'}>
        <SlSocialVkontakte color={'#4C75A3'}/>
        VK</Link>
      <Link href={MyLinks.TELEGRAM}
        className={'hover_link'}>
        <BsTelegram color={'#0088cc'}/>
        Telegram</Link>
      <Link href={MyLinks.GITHUB} className={'hover_link'}>
        <AiOutlineGithub />
        My Github</Link>
    </ul>

    <div className={s.image_wrapper}>
      <NextImage src={Assets.ABOUT}/>
    </div>
    <h4 className={s.link}>
        Return to <Link href={routes.MAIN}>
        <span className={'hover_link'}>main page.</span>
      </Link>
    </h4>
  </div>
}

export default About

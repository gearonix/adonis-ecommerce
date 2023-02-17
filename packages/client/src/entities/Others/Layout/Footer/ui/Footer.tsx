import {FC} from 'react'
import s from './style.module.scss'
import {AiOutlineGithub} from 'shared/ui/icons'
import {HoverLink, NextImage} from 'shared/ui/kit'

const Footer: FC = () => {
  return <footer className={s.footer}>
    <div className={s.footer_block}>
      <div className={s.brand_block}>
        <div className={s.brand_logo}>
          <NextImage src={'/assets/logo.svg'}/>
        </div>
        <p className={s.brand_text}>
                    Best information about the company gies here
                    but now lorem ipsum is
        </p>
        <div className={s.icon_block}>
          <div className={s.icon}>
            <AiOutlineGithub/>
          </div>
          <div className={s.icon}>
            <AiOutlineGithub/>
          </div>
          <div className={s.icon}>
            <AiOutlineGithub/>
          </div>
          <div className={s.icon}>
            <AiOutlineGithub/>
          </div>
        </div>
      </div>
      <nav className={s.navbar}>
        <div className={s.navbar_item}>
          <HoverLink bold>About</HoverLink> <br/>
          <HoverLink>About us</HoverLink> <br/>
        </div>
        <div className={s.navbar_item}>
          <HoverLink bold>About</HoverLink> <br/>
          <HoverLink>About us</HoverLink> <br/>
        </div>
        <div className={s.navbar_item}>
          <HoverLink bold>About</HoverLink> <br/>
          <HoverLink>About us</HoverLink> <br/>
        </div>
        <div className={s.navbar_item}>
          <HoverLink bold>About</HoverLink> <br/>
          <HoverLink>About us</HoverLink><br/>
        </div>
      </nav>
      <div className={s.github_block}>
        <HoverLink>Github</HoverLink>
        <AiOutlineGithub/>
      </div>

    </div>
    <div className={s.footer_bottom}>
      <div className={s.footer_bottom_block}>
        <HoverLink>@ Gearonix</HoverLink>
        <HoverLink>English</HoverLink>
      </div>
    </div>
  </footer>
}

export default Footer

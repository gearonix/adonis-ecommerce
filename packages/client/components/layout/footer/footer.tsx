import s from './footer.module.scss'
import Image from "next/image";
import cn from 'classnames';
import {AiOutlineGithub} from 'icons'

const Footer = () => {
    return <footer className={s.footer}>
        <div className={s.footer_block}>
            <div className={s.brand_block}>
                <Image src={'/logo.svg'}
                       alt={'Adonis'} width={175} height={70}/>
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
                    <h3 className={cn(s.link, 'hover_link')}>About</h3>
                    <h3 className={s.grey_link}>About us</h3>
                </div>
                <div className={s.navbar_item}>
                    <h3 className={cn(s.link, 'hover_link')}>About</h3>
                    <h3 className={s.grey_link}>About us</h3>
                </div>
                <div className={s.navbar_item}>
                    <h3 className={cn(s.link, 'hover_link')}>About</h3>
                    <h3 className={s.grey_link}>About us</h3>
                </div>
                <div className={s.navbar_item}>
                    <h3 className={cn(s.link, 'hover_link')}>About</h3>
                    <h3 className={s.grey_link}>About us</h3>
                </div>
            </nav>
            <div className={s.github_block}>
                <h3 className={s.link}>Github</h3>
                <AiOutlineGithub/>
            </div>

        </div>
        <div className={s.footer_bottom}>
            <div className={s.footer_bottom_block}>
                <h3>@ Gearonix</h3>
                <h3><Image src={'/united_states.svg'}
                           alt={'Select language'} width={28} height={18}/>
                    English</h3>
            </div>
        </div>
    </footer>
}

export default Footer

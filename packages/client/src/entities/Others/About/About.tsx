import s from './style.module.scss'
import {AiOutlineGithub} from 'icons'
import {NextImage} from "shared/ui";

const About = () => {
    return <div className={s.about}>
        <h1 className={s.title}>About us</h1>
        <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in</p>
        <div className={s.github_icon}>
            <AiOutlineGithub/>
        </div>
        <div className={s.image_wrapper}>
            <NextImage src={'/gigachad.png'}/>
        </div>
        <h4 className={s.link}>
            Some text lalalalalla <span className={'hover_link'}>@ some link</span>
        </h4>
    </div>
}

export default About

import {NCT} from "../../../../types/global";
import s from './github_banner.module.scss';

const GithubBanner: NCT = () => {
    return <article className={s.github_banner}>
        <div>
            <h2>Super discount on more than 100 USD</h2>
            <span>Have you ever finally just write dummy info</span>
        </div>
        <button className={'orange_button'}>
            Show more
        </button>
    </article>
}


export default GithubBanner

import {FC} from 'react'
import {Button} from 'shared/ui/kit'
import s from './style.module.scss'

const GithubBanner: FC = () => {
  return <article className={s.github_banner}>
    <div>
      <h2>Super discount on more than 100 USD</h2>
      <span>Have you ever finally just write dummy info</span>
    </div>
    <Button w={'121px'} color={'orange'}>
            Show more
    </Button>
  </article>
}

export default GithubBanner

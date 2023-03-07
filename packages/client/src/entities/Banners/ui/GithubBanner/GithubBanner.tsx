import { FC } from 'react'
import { Button } from 'shared/ui/kit'
import s from './style.module.scss'
import Link from 'next/link'
import { MyLinks } from 'shared/config/consts/myLinks'

const GithubBanner: FC = () => {
  return <article className={s.github_banner}>
    <div>
      <h2>You can see the project on my GitHub</h2>
      <span>Here you can see the project code</span>
    </div>
    <Link href={MyLinks.PROJECT}>
      <Button w={'121px'} color={'orange'}>
        Show more
      </Button>
    </Link>
  </article>
}

export default GithubBanner

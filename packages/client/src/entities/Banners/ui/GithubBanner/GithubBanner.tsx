import { FC, memo } from 'react'
import { Button } from 'shared/ui/kit'
import s from './style.module.scss'
import Link from 'next/link'
import { MyLinks } from 'shared/config/consts/myLinks'
import { useTranslation } from 'react-i18next'

const GithubBanner: FC = memo(() => {
  const { t } = useTranslation()
  return <article className={s.github_banner}>
    <div>
      <h2>{t('You_can')}</h2>
      <span>{t('Here_you')}</span>
    </div>
    <Link href={MyLinks.PROJECT}>
      <Button w={'121px'} color={'orange'}>
        {t('Show_more')}
      </Button>
    </Link>
  </article>
})

export default GithubBanner

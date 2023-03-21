import { FC } from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { Nullable } from 'shared/types/common'
import { routes } from 'shared/config/consts/routes'
import Link from 'next/link'
import { useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'widgets/Login'
import { Display } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'
import { BiMessageDetail } from 'react-icons/bi'

interface Props{
  className?: string,
  targetId: Nullable<number>
}


export const WriteToUser : FC<Props> = ({ className, targetId }) => {
  const isAuthorized = useSelector(AuthSelectors.isAuthorized)
  const { t } = useTranslation()
  return <Display when={isAuthorized}>
    <Link href={{
      pathname: routes.MESSENGER,
      query: { targetId }
    }}>
      <div className={className}>
        <button className="outlined_button"><BiMessageDetail />{t('Write message')}</button>
      </div>
    </Link>
  </Display>
}


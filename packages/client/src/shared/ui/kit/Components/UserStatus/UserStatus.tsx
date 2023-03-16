import { FC } from 'react'
import { UserStatus as UserStatusI } from 'shared/config/consts/others'
import { Nullable } from 'shared/types/common'
import s from './style.module.scss'
import { Display, WithSpring } from 'shared/lib/components'
import cn from 'classnames'

interface Props{
   status: Nullable<UserStatusI>,
   className?: string
}

export const UserStatus : FC<Props> = ({ status, className }) => {
  return <Display when={status === UserStatusI.ONLINE}>
    <WithSpring className={cn(s.user_status, className)}>
      <div className={s.circle}></div>
    </WithSpring>
  </Display>
}



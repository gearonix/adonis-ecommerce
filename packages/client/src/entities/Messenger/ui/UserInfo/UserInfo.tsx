import { FC, memo } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { User } from 'widgets/Profile'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Helpers } from 'shared/lib/helpers'
import { WithSpring } from 'shared/lib/components'
import cn from 'classnames'
import { UserStatus } from 'shared/config/consts/others'

interface UserInfoProps{
  user: User,
  label: string
}

const UserInfo = memo<UserInfoProps>(({ user, label }) => {
  const helpers = new Helpers()
  return <WithSpring className={s.user_info_wrapper} key={user.userId}>
    <div className={s.image}>
      <NextImage src={user.avatar} def={DefaultAssets.AVATAR}/>
    </div>
    <div className={s.info}>
      <h3>{helpers.toNormalName(user)}</h3>
      <span className={cn({ [s.online]: label === UserStatus.ONLINE })}>
        {label}</span>
    </div>
  </WithSpring>
})

export default UserInfo

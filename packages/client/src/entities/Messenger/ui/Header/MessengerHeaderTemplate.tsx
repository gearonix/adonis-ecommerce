import { UserInfo } from 'entities/Messenger'
import { FC, memo, useCallback } from 'react'
import { User } from 'widgets/Profile'
import s from './style.module.scss'
import { Nullable } from 'shared/types/common'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'

interface Props{
  Search: FC,
  user: Nullable<User>,
  label: string
}

const MessengerHeaderTemplate = memo<Props>(({ user, label }) => {
  const router = useRouter()
  const onClick = useCallback(() => {
    if (user?.userId) {
      router.push(`${routes.USERS}/${user.userId}`)
    }
  }, [user])

  return <div className={s.messages_header} onClick={onClick}>
    {user && <UserInfo user={user} label={label}/>}
  </div>
})


export default MessengerHeaderTemplate

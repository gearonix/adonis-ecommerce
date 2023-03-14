import { UserInfo } from 'entities/Messenger'
import { FC } from 'react'
import { User } from 'shared/types/slices'
import s from './style.module.scss'
import { Nullable } from 'shared/types/common'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'
import { WithSpring } from 'shared/lib/components'

interface Props{
  Search: FC,
  user: Nullable<User>,
  label: string
}

const MessengerHeaderTemplate: FC<Props> = ({ Search, user, label }) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`${routes.USERS}/${user?.userId}`)
  }
  return <div className={s.messages_header} onClick={onClick}>
    {user && <UserInfo user={user} label={label}/>}
    <Search/>
  </div>
}

export default MessengerHeaderTemplate

import { UserInfo } from 'entities/Messenger'
import { FC } from 'react'
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

const MessengerHeaderTemplate: FC<Props> = ({ user, label }) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`${routes.USERS}/${user?.userId}`)
  }
  return <div className={s.messages_header} onClick={onClick}>
    {user && <UserInfo user={user} label={label}/>}
  </div>
}

export default MessengerHeaderTemplate

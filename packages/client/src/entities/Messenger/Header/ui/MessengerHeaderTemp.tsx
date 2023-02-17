import {UserInfo} from 'entities/Messenger/UserInfo'
import {FC} from 'react'
import s from './style.module.scss'

const MessengerHeaderTemp: FC<{ Search: FC }> = ({Search}) => {
  return <div className={s.messages_header}>
    <UserInfo/>
    <Search/>
  </div>
}

export default MessengerHeaderTemp

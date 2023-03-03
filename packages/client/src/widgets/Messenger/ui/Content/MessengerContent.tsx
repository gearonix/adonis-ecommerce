import { FC } from 'react'
import s from './style.module.scss'
import { MessengerContent as MessengerContentTemp } from 'entities/Messenger'

const MessengerContent: FC = () => {
  return <div className={s.messages_main}>
    <div className={s.wrapper}>
      <MessengerContentTemp/>
      {/* <MessageBar />*/}
    </div>
  </div>
}

export default MessengerContent

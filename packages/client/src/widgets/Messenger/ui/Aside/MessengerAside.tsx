import { FC } from 'react'
import s from './style.module.scss'
import { SearchUsers } from 'features/Messenger'
import { MessengerUser } from 'entities/Messenger'
import { SelectUser } from 'features/Messenger'

const MessengerAside: FC = () => {
  return <aside className={s.messenger_aside}>
    <SearchUsers/>
    {[1, 2, 3, 4].map((i) => {
      return <MessengerUser SelectUser={SelectUser} key={i}/>
    })}
  </aside>
}

export default MessengerAside

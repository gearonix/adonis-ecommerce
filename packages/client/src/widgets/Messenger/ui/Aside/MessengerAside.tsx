import { FC } from 'react'
import s from './style.module.scss'
import { SearchUsers } from 'features/Messenger'
import { MessengerUser } from 'entities/Messenger'
import { useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'shared/selectors'

const MessengerAside: FC = () => {
  const rooms = useSelector(MessengerSelectors.rooms)
  return <aside className={s.messenger_aside}>
    <SearchUsers/>
    {rooms.map((room, idx) => {
      return <MessengerUser key={idx} room={room}/>
    })}
  </aside>
}

export default MessengerAside

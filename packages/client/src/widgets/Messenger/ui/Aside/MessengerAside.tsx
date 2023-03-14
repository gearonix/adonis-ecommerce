import { FC } from 'react'
import s from './style.module.scss'
import { SearchUsers } from 'features/Messenger'
import { MessengerUser } from 'entities/Messenger'
import { useDispatch, useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'shared/selectors'
import { messengerActions } from 'widgets/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'

const MessengerAside: FC = () => {
  const rooms = useSelector(MessengerSelectors.rooms)
  const selectedId = useSelector(MessengerSelectors.selectedId)
  const dispatch = useDispatch()
  const { actions } = useMessengerSocket()

  const switchRoom = (id : number) => {
    actions.unsubscribeFromRoom(selectedId)
    dispatch(messengerActions.changeSelectedRoomId(id))
  }

  return <aside className={s.messenger_aside}>
    <SearchUsers/>
    {rooms.map((room, idx) => {
      return <MessengerUser key={idx} room={room}
        switchRoom={switchRoom} selected={room.roomId === selectedId}/>
    })}
  </aside>
}

export default MessengerAside

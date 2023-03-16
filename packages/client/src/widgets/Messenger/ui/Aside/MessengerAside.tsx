import { FC } from 'react'
import s from './style.module.scss'
import { SearchUsers } from 'features/Messenger'
import { MessengerUser } from 'entities/Messenger'
import { useDispatch, useSelector } from 'shared/types/redux'
import { messengerActions, MessengerSelectors, selectFilteredRooms } from 'widgets/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { selectOpponentUser } from 'widgets/Messenger/lib/helpers'
import { AuthSelectors } from 'widgets/Login'
import { notifyActions, NotifySelectors } from 'app/providers/Notifications'

const MessengerAside: FC = () => {
  const selectedId = useSelector(MessengerSelectors.selectedId)
  const userId = useSelector(AuthSelectors.userId)
  const rooms = useSelector(selectFilteredRooms)
  const notifications = useSelector(NotifySelectors.selectByRooms(rooms))
  const dispatch = useDispatch()
  const { actions } = useMessengerSocket()
  const getOpponentUser = selectOpponentUser(userId)

  const switchRoom = (id : number) => {
    actions.unsubscribeFromRoom(selectedId)
    dispatch(messengerActions.changeSelectedRoomId(id))
    dispatch(notifyActions.clearNotifications(id))
  }

  return <aside className={s.messenger_aside}>
    <SearchUsers/>
    {rooms.map((room, idx) => {
      return <MessengerUser key={idx} room={room}
        switchRoom={switchRoom}
        selected={room.roomId === selectedId}
        user={getOpponentUser(room)}
        notification={notifications[idx]}/>
    })}
  </aside>
}

export default MessengerAside

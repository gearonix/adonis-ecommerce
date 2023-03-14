import { FC } from 'react'
import s from './style.module.scss'
import { SearchUsers } from 'features/Messenger'
import { MessengerUser } from 'entities/Messenger'
import { useDispatch, useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'shared/selectors'
import { messengerActions } from 'widgets/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { selectOpponentUser } from 'widgets/Messenger/lib/helpers'
import { AuthSelectors } from 'shared/selectors'

const MessengerAside: FC = () => {
  const selectedId = useSelector(MessengerSelectors.selectedId)
  const userId = useSelector(AuthSelectors.userId)
  const rooms = useSelector(MessengerSelectors.filteredRooms)
  const dispatch = useDispatch()
  const { actions } = useMessengerSocket()
  const getOpponentUser = selectOpponentUser(userId)

  const switchRoom = (id : number) => {
    actions.unsubscribeFromRoom(selectedId)
    dispatch(messengerActions.changeSelectedRoomId(id))
  }

  return <aside className={s.messenger_aside}>
    <SearchUsers/>
    {rooms.map((room, idx) => {
      return <MessengerUser key={idx} room={room}
        switchRoom={switchRoom}
        selected={room.roomId === selectedId}
        user={getOpponentUser(room)} />
    })}
  </aside>
}

export default MessengerAside

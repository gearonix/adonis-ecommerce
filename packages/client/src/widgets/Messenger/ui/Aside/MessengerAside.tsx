import { FC, memo, useCallback, useEffect } from 'react'
import s from './style.module.scss'
import { SearchUsers } from 'features/Messenger'
import { MessengerUser } from 'entities/Messenger'
import { useDispatch, useSelector } from 'shared/types/redux'
import { messengerActions, MessengerSelectors, selectFilteredRooms } from 'widgets/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { selectOpponentUser } from 'widgets/Messenger/lib/helpers'
import { AuthSelectors } from 'widgets/Login'
import { notifyActions, NotifySelectors } from 'app/providers/Notifications'
import { useRouter } from 'next/router'
import { useFilteredEffect } from 'shared/lib/hooks'
import { getRoomByTargetId } from 'widgets/Messenger/lib/helpers/getRoomByTargetId'
import { Display } from 'shared/lib/components'
import { AiOutlineSearch } from 'shared/ui/icons'
import { AiOutlineSmile } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const MessengerAside: FC = memo(() => {
  const selectedId = useSelector(MessengerSelectors.selectedId)
  const userId = useSelector(AuthSelectors.userId)
  const rooms = useSelector(selectFilteredRooms)
  const notifications = useSelector(NotifySelectors.selectByRooms(rooms))
  const dispatch = useDispatch()
  const router = useRouter()
  const targetId = router.query.targetId as string
  const { actions } = useMessengerSocket()
  const getOpponentUser = selectOpponentUser(userId)

  const switchRoom = useCallback((id : number) => {
    actions.unsubscribeFromRoom(selectedId)
    dispatch(messengerActions.changeSelectedRoomId(id))
    dispatch(notifyActions.clearNotifications(id))
  }, [])

  useFilteredEffect(() => {
    const roomId = getRoomByTargetId(targetId, rooms)

    if (roomId) {
      switchRoom(Number(roomId))
    }
  }, [targetId, rooms.length])

  return <aside className={s.messenger_aside}>
    <SearchUsers/>
    {rooms.map((room, idx) => {
      return <MessengerUser key={idx} room={room}
        switchRoom={switchRoom}
        selected={room.roomId === selectedId}
        user={getOpponentUser(room)}
        notification={notifications[idx]}/>
    })}
    <Display when={!rooms.length}>
      <NothingFound/>
    </Display>
  </aside>
})

export const NothingFound: FC = () => {
  const { t } = useTranslation()
  return <div className={s.nothing_found}>
    <h2>
      {t('Nothing found.')}
    </h2>
    <AiOutlineSmile/>
  </div>
}

export default MessengerAside

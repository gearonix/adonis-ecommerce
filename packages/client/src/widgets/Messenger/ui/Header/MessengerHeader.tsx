import { FC, useEffect } from 'react'
import { MessengerHeaderTemp } from 'entities/Messenger'
import { SearchMessages } from 'features/Messenger'
import { useRouter } from 'next/router'
import { useFilteredEffect } from 'shared/lib/hooks'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getRooms } from 'widgets/Messenger/store/thunks'
import { messengerActions, MessengerSelectors, selectOpponentUser } from 'widgets/Messenger'
import { useAuthSocket } from 'widgets/Profile/lib/hooks/useAuthSocket'
import { UserStatus } from 'shared/config/consts/others'

const MessengerHeader: FC = () => {
  const opponent = useSelector(selectOpponentUser)
  const roomId = useSelector(MessengerSelectors.selectedId)
  const userStatus = useSelector(MessengerSelectors.userStatus)
  const router = useRouter()
  const targetId = router.query.targetId as string
  const { actions, subscribes, socket } = useMessengerSocket()
  const authSocket = useAuthSocket()
  const dispatch = useDispatch()


  useFilteredEffect(() => {
    subscribes.onAddGroup((room) => {
      dispatch(messengerActions.addRoom(room))
    })

    actions.startChat(targetId)
  }, [targetId])

  useEffect(() => {
    authSocket.actions.subscribeToStatus(opponent?.userId)
  }, [roomId, opponent])

  useEffect(() => {
    dispatch(getRooms())

    authSocket.subscribes.onStatusChanged((status: UserStatus) => {
      dispatch(messengerActions.changeUserStatus(status))
    })
    return () => {
      dispatch(messengerActions.clearMessenger())
    }
  }, [])

  return <MessengerHeaderTemp Search={SearchMessages}
    user={opponent} label={userStatus}/>
}

export default MessengerHeader

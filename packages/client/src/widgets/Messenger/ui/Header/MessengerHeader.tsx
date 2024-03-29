import { FC, memo, useEffect } from 'react'
import { MessengerHeaderTemplate } from 'entities/Messenger'
import { SearchMessages } from 'features/Messenger'
import { useRouter } from 'next/router'
import { useFilteredEffect } from 'shared/lib/hooks'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getRooms } from 'widgets/Messenger/store/thunks'
import { messengerActions, MessengerSelectors, selectOpponentUser } from 'widgets/Messenger'
import { useAuthSocket } from 'widgets/Profile/lib/hooks/useAuthSocket'
import { UserStatus } from 'shared/config/consts/others'
import { Display } from 'shared/lib/components'

const MessengerHeader = memo(() => {
  const opponent = useSelector(selectOpponentUser)
  const roomId = useSelector(MessengerSelectors.selectedId)
  const userStatus = useSelector(MessengerSelectors.userStatus)
  const router = useRouter()
  const targetId = router.query.targetId as string
  const { actions, subscribes } = useMessengerSocket()
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

  return <Display when={opponent?.userId}>
    <MessengerHeaderTemplate Search={SearchMessages}
      user={opponent} label={userStatus}/>
  </Display>
})

export default MessengerHeader

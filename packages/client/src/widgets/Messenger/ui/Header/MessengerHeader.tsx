import { FC, useEffect } from 'react'
import { MessengerHeaderTemp } from 'entities/Messenger'
import { SearchMessages } from 'features/Messenger'
import { useRouter } from 'next/router'
import { useFilteredEffect } from 'shared/lib/hooks'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getRooms } from 'widgets/Messenger/store/thunks'
import { messengerActions } from 'widgets/Messenger'
import { AuthSelectors, MessengerSelectors } from 'shared/selectors'

const MessengerHeader: FC = () => {
  const opponent = useSelector(MessengerSelectors.opponentUser)
  const router = useRouter()
  const targetId = router.query.targetId as string
  const { actions, subscribes } = useMessengerSocket()
  const dispatch = useDispatch()
  const isTyping = useSelector(MessengerSelectors.isTyping)
  const authUserId = useSelector(AuthSelectors.userId)


  useFilteredEffect(() => {
    subscribes.onAddGroup((room) => {
      dispatch(messengerActions.addRoom(room))
    })

    actions.startChat(targetId)
  }, [targetId])

  useEffect(() => {
    subscribes.onUserTyping(() => {
      dispatch(messengerActions.setIsTyping(true))
    })
    subscribes.onNoLongerTyping(() => {
      dispatch(messengerActions.setIsTyping(false))
    })
  }, [])

  useEffect(() => {
    dispatch(getRooms())
  }, [])

  return <MessengerHeaderTemp Search={SearchMessages}
    user={opponent} label={JSON.stringify(isTyping)}/>
}

export default MessengerHeader

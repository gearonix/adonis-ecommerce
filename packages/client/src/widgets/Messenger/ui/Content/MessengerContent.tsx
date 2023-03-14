import { FC, useEffect } from 'react'
import s from './style.module.scss'
import { MessageBar, MessengerContent as MessengerContentTemp } from 'entities/Messenger'
import { useRouter } from 'next/router'
import { useFilteredEffect } from 'shared/lib/hooks'
import { useDispatch, useSelector } from 'shared/types/redux'
import { selectRoom } from 'widgets/Messenger/store/thunks'
import { Display } from 'shared/lib/components'
import { MessengerSelectors, AuthSelectors } from 'shared/selectors'
import MessengerInput from '../MessengerInput/MessengerInput'
import { messengerActions } from 'widgets/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'

const MessengerContent: FC = () => {
  const router = useRouter()
  const roomId = router.query.roomId as string
  const dispatch = useDispatch()
  const messages = useSelector(MessengerSelectors.messages)
  const userId = useSelector(AuthSelectors.userId)
  const { actions, subscribes } = useMessengerSocket()


  useEffect(() => {
    subscribes.onAddMessage((message) => {
      dispatch(messengerActions.addMessage(message))
    })
  }, [])

  useFilteredEffect(() => {
    dispatch(messengerActions.clearRoom())
    actions.subscribeToRoom(Number(roomId))
    dispatch(selectRoom(Number(roomId)))
  }, [roomId])

  return <div className={s.messages_main}>
    <div className={s.wrapper}>
      <Display when={roomId}>
        <MessengerContentTemp messages={messages} userId={userId}/>
      </Display>
      <MessengerInput/>
    </div>
  </div>
}

export default MessengerContent

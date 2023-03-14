import { FC, useEffect } from 'react'
import s from './style.module.scss'
import { MessengerContent as MessengerContentTemp } from 'entities/Messenger'
import { useFilteredEffect } from 'shared/lib/hooks'
import { useDispatch, useSelector } from 'shared/types/redux'
import { selectRoom } from 'widgets/Messenger/store/thunks'
import { Display } from 'shared/lib/components'
import { MessengerSelectors, AuthSelectors } from 'shared/selectors'
import MessengerInput from '../MessengerInput/MessengerInput'
import { messengerActions } from 'widgets/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { selectOpponentUser } from 'widgets/Messenger/lib/helpers'

const MessengerContent: FC = () => {
  const dispatch = useDispatch()
  const messages = useSelector(MessengerSelectors.messages)
  const roomId = useSelector(MessengerSelectors.selectedId)
  const userId = useSelector(AuthSelectors.userId)
  const { actions, subscribes } = useMessengerSocket()


  useEffect(() => {
    subscribes.onAddMessage((message) => {
      dispatch(messengerActions.addMessage(message))
    })
  }, [])

  useFilteredEffect(() => {
    dispatch(messengerActions.clearRoom())
    actions.subscribeToRoom(roomId)
    dispatch(selectRoom(roomId))
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

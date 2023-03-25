import { memo, useCallback, useEffect } from 'react'
import s from './style.module.scss'
import { MessengerContent as MessengerContentTemp } from 'entities/Messenger'
import { useFilteredEffect } from 'shared/lib/hooks'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getMessages } from 'widgets/Messenger/store/thunks'
import { Display } from 'shared/lib/components'
import MessengerInput from '../MessengerInput/MessengerInput'
import { messengerActions, MessengerSelectors } from 'widgets/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { AuthSelectors } from 'widgets/Login'
import { DefaultChat } from 'entities/Messenger/ui/Content/MessengerContent'

const MessengerContent = memo(() => {
  const dispatch = useDispatch()
  const messages = useSelector(MessengerSelectors.messages)
  const roomId = useSelector(MessengerSelectors.selectedId)
  const userId = useSelector(AuthSelectors.userId)
  const page = useSelector(MessengerSelectors.page)
  const { actions, subscribes } = useMessengerSocket()


  useEffect(() => {
    subscribes.onAddMessage((message) => {
      dispatch(messengerActions.addMessage(message))
      actions.makeMessagesRead(message)
    })
    subscribes.onMessagesRead(() => {
      dispatch(messengerActions.makeMessagesRead())
    })
  }, [])

  useFilteredEffect(() => {
    dispatch(messengerActions.clearRoom())
    actions.subscribeToRoom(roomId)
    dispatch(messengerActions.clearPage())
    dispatch(getMessages({ roomId }))
  }, [roomId])

  const updatePage = useCallback(() => {
    dispatch(messengerActions.increasePage())
  }, [])

  useEffect(() => {
    if (roomId && page !== 0) {
      dispatch(getMessages({ roomId, page }))
    }
  }, [page])

  return <div className={s.messages_main}>
    <div className={s.wrapper}>
      <Display when={roomId}>
        <MessengerContentTemp messages={messages} userId={userId}
          getMoreMessages={updatePage} roomId={roomId}/>
        <MessengerInput/>
      </Display>
      <Display when={!roomId}>
        <DefaultChat/>
      </Display>
    </div>
  </div>
})


export default MessengerContent

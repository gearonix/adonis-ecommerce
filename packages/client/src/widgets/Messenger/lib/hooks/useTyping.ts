import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'shared/selectors'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks/useMessengerSocket'
import { messengerActions } from 'widgets/Messenger'

export const useTyping = () => {
  const roomId = useSelector(MessengerSelectors.selectedId)
  const { actions, subscribes } = useMessengerSocket()
  const dispatch = useDispatch()
  const timeout = useRef<any>()

  const onEndTyping = (roomId: number) => () => {
    if (timeout.current) {
      actions.typingStopped(roomId)
    }
    clearTimeout(timeout.current)
    timeout.current = null
  }

  useEffect(() => {
    subscribes.onUserTyping(() => {
      console.log('user typing...')
      dispatch(messengerActions.setIsTyping(true))
    })
    subscribes.onNoLongerTyping(() => {
      console.log('typing stopped.')
      dispatch(messengerActions.setIsTyping(false))
    })
  }, [])

  return (roomId: number) => {
    if (!timeout.current) {
      actions.startTyping(roomId)
      timeout.current = setTimeout(onEndTyping(roomId), 3000)
      return
    }
    timeout.current = setTimeout(onEndTyping(roomId), 3000)
  }
}

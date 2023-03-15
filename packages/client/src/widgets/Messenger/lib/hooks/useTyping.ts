import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'shared/selectors'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks/useMessengerSocket'
import { messengerActions } from 'widgets/Messenger'

export const useTyping = () => {
  const roomId = useSelector(MessengerSelectors.selectedId)
  const dispatch = useDispatch()
  const timeout = useRef<any>()
  const [isTyping, setIsTyping] = useState(false)
  const { actions, subscribes } = useMessengerSocket()

  const onEndTyping = () => {
    actions.typingStopped(roomId)
    setIsTyping(false)
  }

  useEffect(() => {
    subscribes.onUserTyping(() => {
      dispatch(messengerActions.setIsTyping(true))
    })
    subscribes.onNoLongerTyping(() => {
      dispatch(messengerActions.setIsTyping(false))
    })
  }, [])

  useEffect(() => {
    setIsTyping(false)
  }, [roomId])

  return () => {
    if (!isTyping) {
      actions.startTyping(roomId)
      setIsTyping(true)
      timeout.current = setTimeout(onEndTyping, 1000)
      return
    }
    clearTimeout(timeout.current)
    timeout.current = setTimeout(onEndTyping, 1000)
  }
}

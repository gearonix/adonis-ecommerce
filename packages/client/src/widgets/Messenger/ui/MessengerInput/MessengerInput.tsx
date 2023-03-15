import { FC, useEffect, useRef, useState } from 'react'
import { useForm } from 'shared/lib/hooks'
import { MessageBar } from 'entities/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useDispatch, useSelector } from 'shared/types/redux'
import { MessengerSelectors, AuthSelectors } from 'shared/selectors'
import { messengerActions } from 'widgets/Messenger'


interface MessengerForm{
    message: string
}

const MessengerInput : FC = () => {
  const { submit, reg, setValue } = useForm<MessengerForm>(null)
  const { actions, subscribes } = useMessengerSocket()
  const roomId = useSelector(MessengerSelectors.selectedId)
  const dispatch = useDispatch()
  const timeout = useRef<any>()
  const userId = useSelector(AuthSelectors.userId)
  const [isTyping, setIsTyping] = useState(false)

  // const onChange = useTyping()

  useEffect(() => {
    subscribes.onUserTyping(() => {
      dispatch(messengerActions.setIsTyping(true))
    })
    subscribes.onNoLongerTyping(() => {
      dispatch(messengerActions.setIsTyping(false))
    })
  }, [])

  const onSubmit = ({ message }: MessengerForm) => {
    if (message) {
      actions.sendMessage(roomId, message)
    }

    setValue('message', '')
  }

  const onEndTyping = () => {
    actions.typingStopped(roomId)
    setIsTyping(false)
  }

  const onChange = () => {
    console.log('roomId', roomId)
    if (!isTyping) {
      console.log('no isTyping')
      actions.startTyping(roomId)
      setIsTyping(true)
      timeout.current = setTimeout(onEndTyping, 3000)
      return
    }
    clearTimeout(timeout.current)
    timeout.current = setTimeout(onEndTyping, 3000)
  }


  return <MessageBar submit={submit(onSubmit)} reg={reg} onChange={onChange}/>
}


export default MessengerInput

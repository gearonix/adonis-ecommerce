import { FC, useEffect } from 'react'
import { useForm } from 'shared/lib/hooks'
import { MessageBar } from 'entities/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'shared/selectors'
import { useTyping } from 'widgets/Messenger/lib/hooks/useTyping'


interface MessengerForm{
    message: string
}

const MessengerInput : FC = () => {
  const { submit, reg, setValue, watch, getValues } = useForm<MessengerForm>(null)
  const { actions } = useMessengerSocket()
  const roomId = useSelector(MessengerSelectors.selectedId)
  const onChange = useTyping()

  const onSubmit = ({ message }: MessengerForm) => {
    if (message) {
      actions.sendMessage(roomId, message)
    }

    setValue('message', '')
  }

  useEffect(() => {
    const sub = watch(() => {
      if (getValues().message) {
        onChange(roomId)
      }
    })
    return () => sub.unsubscribe()
  }, [])


  return <MessageBar submit={submit(onSubmit)} reg={reg}/>
}


export default MessengerInput

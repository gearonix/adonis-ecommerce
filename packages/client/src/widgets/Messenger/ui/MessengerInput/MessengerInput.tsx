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
  const { submit, setValue, register } = useForm<MessengerForm>(null)
  const { actions } = useMessengerSocket()
  const roomId = useSelector(MessengerSelectors.selectedId)
  const onChange = useTyping()

  const resetValue = () => {
    setValue('message', '')
  }

  const onSubmit = ({ message }: MessengerForm) => {
    console.log(message)
    if (message) {
      actions.sendMessage(roomId, message)
    }
    resetValue()
  }

  useEffect(resetValue, [roomId])


  return <MessageBar submit={submit(onSubmit)} reg={register} onChange={onChange}/>
}


export default MessengerInput

import { FC } from 'react'
import { useForm } from 'shared/lib/hooks'
import { MessageBar } from 'entities/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'shared/selectors'


interface MessengerForm{
    message: string
}

const MessengerInput : FC = () => {
  const { submit, reg } = useForm<MessengerForm>(null)
  const { actions } = useMessengerSocket()
  const roomId = useSelector(MessengerSelectors.selectedId)

  const onSubmit = ({ message }: MessengerForm) => {
    actions.sendMessage(roomId, message)
  }

  return <MessageBar submit={submit(onSubmit)} reg={reg}/>
}


export default MessengerInput

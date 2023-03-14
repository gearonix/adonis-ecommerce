import { FC } from 'react'
import { useForm } from 'shared/lib/hooks'
import { MessageBar } from 'entities/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useRouter } from 'next/router'


interface MessengerForm{
    message: string
}

const MessengerInput : FC = () => {
  const { submit, reg } = useForm<MessengerForm>(null)
  const { actions } = useMessengerSocket()
  const router = useRouter()
  const roomId = router.query.roomId as string
  const onSubmit = ({ message }: MessengerForm) => {
    actions.sendMessage(roomId, message)
  }
  return <MessageBar submit={submit(onSubmit)} reg={reg}/>
}


export default MessengerInput

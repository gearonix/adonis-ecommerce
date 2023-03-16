import { useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'widgets/Login'
import {Message, MessengerSelectors } from 'widgets/Messenger'

export const useNewMessage = () => {
  const selectedRoom = useSelector(MessengerSelectors.selectedId)
  const userId = useSelector(AuthSelectors.userId)

  return (message: Message) => {
    return message.senderId !== userId && message.roomId !== selectedRoom
  }
}

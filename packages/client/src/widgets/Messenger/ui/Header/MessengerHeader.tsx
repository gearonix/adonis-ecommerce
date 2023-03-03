import { FC } from 'react'
import { MessengerHeaderTemp } from 'entities/Messenger'
import { SearchMessages } from 'features/Messenger'

const MessengerHeader: FC = () => {
  return <MessengerHeaderTemp Search={SearchMessages}/>
}

export default MessengerHeader

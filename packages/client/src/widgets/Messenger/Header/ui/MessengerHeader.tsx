import {FC} from 'react'
import {MessengerHeaderTemp} from 'entities/Messenger/Header'
import {SearchMessages} from 'features/Messenger/SearchMessages'

const MessengerHeader: FC = () => {
  return <MessengerHeaderTemp Search={SearchMessages}/>
}

export default MessengerHeader

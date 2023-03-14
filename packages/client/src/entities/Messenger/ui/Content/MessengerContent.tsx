import { FC } from 'react'
import s from './style.module.scss'
import { Message as MessageUI, TimeLabel } from 'shared/ui/kit'
import { Message } from 'shared/types/slices'
import { Nullable } from 'shared/types/common'

interface Props{
  messages: Message[],
  userId: Nullable<number>
}

const MessengerContent: FC<Props> = ({ messages, userId }) => {
  return <div className={s.messages_block}>
    <div className={s.messages_wrapper}>
      <TimeLabel/>
      {messages.map((message) => {
        return <MessageUI message={message.messageText}
          isMine={message.senderId === userId} key={message.messageId}/>
      })}
    </div>
  </div>
}

export default MessengerContent

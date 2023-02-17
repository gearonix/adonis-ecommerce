import {FC} from 'react'
import s from './style.module.scss'
import {AiFillFileAdd} from 'shared/ui/icons'

export interface MessageBarProps {
  placeholder?: string,
  MessageForm: FC<{ placeholder: string }>
}


const MessageBar: FC<MessageBarProps> = ({placeholder = 'Message', MessageForm}) => {
  return <article className={s.message_bar}>
    <div className={s.icon_wrapper}>
      <AiFillFileAdd/>
    </div>
    <MessageForm placeholder={placeholder}/>
  </article>
}


export default MessageBar

import {FC} from 'react'
import s from './style.module.scss'
import {AiFillFileAdd, MdSend} from 'shared/ui/icons'
import {CreateFieldValues} from 'shared/lib/helpers/others'
import {onEnter} from 'features/SearchPage/HeaderSearch/lib/helpers'

export interface MessageBarProps {
  placeholder?: string,
  reg: CreateFieldValues<{message: string}>,
  submit: () => void
}


const MessageBar: FC<MessageBarProps> = ({placeholder = 'Message', reg, submit}) => {
  return <article className={s.message_bar}>
    <div className={s.icon_wrapper}>
      <AiFillFileAdd/>
    </div>
    <input placeholder={placeholder} maxLength={150} {...reg('message').inputProps}
      onKeyDown={onEnter(submit)}/>
    <div className={s.send} onClick={submit}>
      <MdSend/>
    </div>
  </article>
}


export default MessageBar

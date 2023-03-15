import { FC } from 'react'
import s from './style.module.scss'
import { AiFillFileAdd, MdSend } from 'shared/ui/icons'
import { CreateFieldValues } from 'shared/lib/helpers'
import { onEnter } from 'features/SearchPage/lib/helpers'
import { useTranslation } from 'react-i18next'

export interface MessageBarProps {
  placeholder?: string,
  reg: CreateFieldValues<{message: string}>,
  submit: () => void,
  onChange: () => void
}


const MessageBar: FC<MessageBarProps> = ({ placeholder, reg, submit, onChange }) => {
  const { t } = useTranslation()
  return <article className={s.message_bar}>
    <div className={s.image_wrapper}>
      <AiFillFileAdd/>
    </div>
    <input placeholder={t('Message') || placeholder }
      maxLength={150} {...reg('message').inputProps}
      onKeyDown={onChange}/>
    <div className={s.send} onClick={submit}>
      <MdSend/>
    </div>
  </article>
}


export default MessageBar

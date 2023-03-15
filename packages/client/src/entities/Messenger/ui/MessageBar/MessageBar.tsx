import { ChangeEvent, FC } from 'react'
import s from './style.module.scss'
import { AiFillFileAdd, MdSend } from 'shared/ui/icons'
import { createFieldValues } from 'shared/lib/helpers'
import { onEnter } from 'features/SearchPage/lib/helpers'
import { useTranslation } from 'react-i18next'

export interface MessageBarProps {
  placeholder?: string,
  form: any,
  submit: () => void,
  onChange: () => void
}


const MessageBar: FC<MessageBarProps> = ({ placeholder, submit, onChange, form }) => {
  const { t } = useTranslation()

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      form.setValue('file', e.target.files[0])
    }
  }

  return <article className={s.message_bar}>
    <div className={s.image_wrapper}>
      <AiFillFileAdd/>
      <input type={'file'} onChange={onFileChange}/>
    </div>
    <input placeholder={t('Message') || placeholder }
      maxLength={150}
      onKeyDown={onEnter(submit)}
      autoComplete={'off'} {...form.register('message', { onChange })}/>
    <div className={s.send} onClick={submit}>
      <MdSend/>
    </div>
  </article>
}


export default MessageBar

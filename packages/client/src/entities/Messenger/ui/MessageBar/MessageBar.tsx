import { ChangeEvent, FC, memo, useCallback } from 'react'
import s from './style.module.scss'
import { AiFillFileAdd } from 'shared/ui/icons'
import { onEnter } from 'features/SearchPage/lib/helpers'
import { useTranslation } from 'react-i18next'
import { BiSend } from 'react-icons/bi'
import { WithSpring } from 'shared/lib/components'

export interface MessageBarProps {
  placeholder?: string,
  form: any,
  submit: () => void,
  onChange: () => void
}


const MessageBar = memo<MessageBarProps>(({ placeholder, submit, onChange, form }) => {
  const { t } = useTranslation()

  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      form.setValue('file', e.target.files[0])
    }
  }, [])

  return <WithSpring className={s.message_bar}>
    <input placeholder={t('Message') || placeholder }
      maxLength={150}
      onKeyDown={onEnter(submit)}
      autoComplete={'off'} {...form.register('message', { onChange })}/>
    <div className={s.buttons}>
      <div className={s.image_wrapper}>
        <AiFillFileAdd/>
        <input type={'file'} onChange={onFileChange}/>
      </div>
      <div className={s.send} onClick={submit}>
        <BiSend/>
      </div>
    </div>
  </WithSpring>
})


export default MessageBar

import { ChangeEvent, memo, useCallback, useState } from 'react'
import s from './style.module.scss'
import { AiFillFileAdd, RxCross1 } from 'shared/ui/icons'
import { onEnter } from 'features/SearchPage/lib/helpers'
import { useTranslation } from 'react-i18next'
import { BiSend } from 'react-icons/bi'
import { Display, WithSpring } from 'shared/lib/components'
import { NextImage } from 'shared/ui/kit'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Nullable } from 'shared/types/common'

export interface MessageBarProps {
  placeholder?: string,
  form: any,
  submit: () => void,
  onChange: () => void
}


const MessageBar = memo<MessageBarProps>(({ placeholder, submit, onChange, form }) => {
  const { t } = useTranslation()
  const [url, setUrl] = useState<Nullable<string>>(null)

  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0]
      changeFile(file)
    }
  }, [])

  const submitForm = () => {
    setUrl(null)
    submit()
  }

  const changeFile = (file: Nullable<File>) => {
    setUrl(file ? URL?.createObjectURL(file) : null)
    form.setValue('file', file)
  }

  return <WithSpring className={s.message_bar}>
    <Display when={url}>
      <div className={s.attached_image}>
        <NextImage src={url as string} def={DefaultAssets.MESSAGE}/>
        <RxCross1 onClick={() => changeFile(null)}/>
      </div>
    </Display>
    <input placeholder={t('Message') || placeholder }
      maxLength={150}
      onKeyDown={onEnter(submit)}
      autoComplete={'off'} {...form.register('message', { onChange })}/>
    <div className={s.buttons}>
      <div className={s.image_wrapper}>
        <AiFillFileAdd/>
        <input type={'file'} onChange={onFileChange}/>
      </div>
      <div className={s.send} onClick={submitForm}>
        <BiSend/>
      </div>
    </div>
  </WithSpring>
})


export default MessageBar

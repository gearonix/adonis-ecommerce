import { FC } from 'react'
import { TextArea } from 'shared/ui/material'
import { UploadWithPreview } from 'shared/ui/kit'
import { AddPostForm } from 'widgets/Posts/types'
import { CreateFieldValues } from 'shared/lib/helpers'
import s from './style.module.scss'
import cn from 'classnames'
import { useTheme } from 'shared/lib/hooks'
import { useTranslation } from 'react-i18next'
import { BsFileEarmarkPost, MdMessage } from 'shared/ui/icons'

interface AddPostProps{
  reg: CreateFieldValues<AddPostForm>,
  submit: () => void,
  close: () => void
}


const AddPostTemplate : FC<AddPostProps> = ({ reg, submit, close }) => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  return <div className={cn('with_theme', theme)}>
    <h2 className={s.title}>{t('Write a post about something!')}</h2>

    <div className={s.container}>
      <UploadWithPreview values={reg('image')}/>
    </div>
    <div className={s.container}>
      <TextArea title={t('Post message')} values={reg('message')}
        placeholder={t('Write message') || ''} Icon={BsFileEarmarkPost}/>
    </div>
    <div className={s.container}>
      <div className={s.save_buttons}>
        <button className="primary_button" onClick={submit}>{t('Add Post')}</button>
        <button className="outlined_button" onClick={close}>{t('Cancel')}</button>
      </div>
    </div>
  </div>
}


export default AddPostTemplate

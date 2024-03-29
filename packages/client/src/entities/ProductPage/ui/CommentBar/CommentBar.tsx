import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import s from './style.module.scss'
import { RiQuestionAnswerLine } from 'shared/ui/icons'
import { BlueLinkHeader, Button } from 'shared/ui/kit'
import { createFieldValues } from 'shared/lib/helpers'
import { CommentForm } from 'features/ProductPage'
import { TextArea } from 'shared/ui/material'
import cn from 'classnames'

interface CommentBarProps{
    reg : ReturnType<typeof createFieldValues<CommentForm>>,
    submit: () => void
}


const CommentBar = memo<CommentBarProps>(({ reg, submit }) => {
  const { t } = useTranslation()
  return <div className={s.comment_bar}>
    <BlueLinkHeader label={t('What are your thoughts?')} Icon={RiQuestionAnswerLine}/>
    <div className={s.textarea}>
      <TextArea title={t('Write your opinion about the product.')} values={reg('message')}
        placeholder={t('Your opinion...') || ''}/>
      <button className={cn(s.submit_button, 'primary_button')}
        onClick={submit}>{t('Leave comment')}</button>
    </div>
  </div>
})


export default CommentBar

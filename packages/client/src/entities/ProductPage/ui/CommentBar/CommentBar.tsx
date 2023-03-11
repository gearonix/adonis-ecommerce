import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import s from './style.module.scss'
import { RiQuestionAnswerLine } from 'shared/ui/icons'
import { BlueLinkHeader, Button } from 'shared/ui/kit'
import { createFieldValues } from 'shared/lib/helpers'
import { CommentForm } from 'features/ProductPage'
import { TextArea } from 'shared/ui/material'

interface CommentBarProps{
    reg : ReturnType<typeof createFieldValues<CommentForm>>,
    submit: () => void
}


const CommentBar : FC<CommentBarProps> = ({ reg, submit }) => {
  const { t } = useTranslation()
  return <div className={s.comment_bar}>
    <BlueLinkHeader label={t('What are your thoughts?')} Icon={RiQuestionAnswerLine}/>
    <div className={s.textarea}>
      <TextArea title={t('Write your opinion about the product.')} values={reg('message')}
        placeholder={t('Your opinion...') || ''}/>
      <Button w={100} className={s.submit_button} onClick={submit}>
        {t('Leave comment')}
      </Button>
    </div>
  </div>
}


export default CommentBar

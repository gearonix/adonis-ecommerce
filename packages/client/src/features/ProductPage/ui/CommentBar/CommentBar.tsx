import { FC, memo } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { addComment } from 'widgets/CurrentProduct/store/thunks'
import Helpers from 'shared/lib/helpers/helpers'
import { useForm } from 'shared/lib/hooks/useForm'
import { useUnauthorized } from 'shared/lib/hooks'
import { Display } from 'shared/lib/components'
import { addCommentSchema } from 'features/ProductPage/lib/formSchemes'
import { CommentBar as CommentBarTemplate, Thanks } from 'entities/ProductPage'
import { ProductSelectors } from 'widgets/CurrentProduct'

export interface CommentForm{
    message: string
}

export const CommentBar = memo(() => {
  const { submit, reg, form } = useForm<CommentForm>(addCommentSchema)
  const dispatch = useDispatch()
  const helpers = new Helpers()
  const authorized = useUnauthorized()
  const isExists = useSelector(ProductSelectors.isExists)

  const onSubmit = authorized(({ message }: CommentForm) => {
    if (!helpers.removeSpaces(message)) {
      return
    }

    dispatch(addComment(message))
    form.setValue('message', '')
  })

  return <Display when={isExists}>
    <article style={{ display: 'flex', justifyContent: 'space-between' }}>
      <CommentBarTemplate reg={reg} submit={submit(onSubmit)}/>
      <Thanks />
    </article>
  </Display>
})

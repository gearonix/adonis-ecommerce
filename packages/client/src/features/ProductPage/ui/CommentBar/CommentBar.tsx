import { FC } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { addComment } from 'widgets/CurrentProduct/store/thunks'
import Helpers from 'shared/lib/helpers/helpers'
import { useForm } from 'shared/lib/hooks/useForm'
import { MessageBar } from 'entities/Messenger'
import { useRouter } from 'next/router'
import { useUnauthorized } from 'shared/lib/hooks'
import { ProductSelectors } from 'shared/selectors'
import { Display } from 'shared/lib/components'

interface CommentForm{
    message: string
}

export const CommentBar: FC = () => {
  const { submit, reg, form } = useForm<CommentForm>(null)
  const dispatch = useDispatch()
  const helpers = new Helpers()
  const authorized = useUnauthorized()
  const isExists = useSelector(ProductSelectors.isExists)


  const onSubmit = authorized(({ message }: CommentForm) => {
    if (!helpers.removeSpaces(message)) {
      return
    }

    dispatch(addComment(message))
    form.reset()
  })
  return <Display when={isExists}>
    <MessageBar submit={submit(onSubmit)} reg={reg}/>
  </Display>
}
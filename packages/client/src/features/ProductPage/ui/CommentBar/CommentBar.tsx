import { FC } from 'react'
import { useDispatch } from 'shared/types/redux'
import { addComment } from 'widgets/CurrentProduct/store/thunks'
import Helpers from 'shared/lib/helpers/helpers'
import { useForm } from 'shared/lib/hooks/useForm'
import { MessageBar } from 'entities/Messenger'

interface CommentForm{
    message: string
}

export const CommentBar: FC = () => {
  const { submit, reg, form } = useForm<CommentForm>(null)
  const dispatch = useDispatch()
  const helpers = new Helpers()
  const onSubmit = ({ message }: CommentForm) => {
    if (!helpers.removeSpaces(message)) {
      return
    }
    dispatch(addComment(message))
    form.reset()
  }
  return <MessageBar submit={submit(onSubmit)} reg={reg}/>
}

import {FC} from 'react'
import {useForm} from 'shared/lib/helpers/hooks/common'
import {useDispatch} from 'shared/types/redux'
import {addComment} from 'widgets/CurrentProduct/store/thunks'
import {MessageBar} from 'entities/Messenger/MessageBar'
import Helpers from 'shared/lib/helpers/helpers'

interface CommentForm{
    message: string
}

export const CommentBar: FC = () => {
  const {submit, reg, form} = useForm<CommentForm>(null)
  const dispatch = useDispatch()
  const helpers = new Helpers()
  const onSubmit = ({message}: CommentForm) => {
    if (!helpers.removeSpaces(message)) {
      return
    }
    dispatch(addComment(message))
    form.reset()
  }
  return <MessageBar submit={submit(onSubmit)} reg={reg}/>
}

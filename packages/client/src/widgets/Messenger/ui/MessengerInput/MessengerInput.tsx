import { FC, useEffect } from 'react'
import { useForm } from 'shared/lib/hooks'
import { MessageBar } from 'entities/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'shared/selectors'
import { useTyping } from 'widgets/Messenger/lib/hooks/useTyping'
import { Nullable } from 'shared/types/common'


export interface MessengerForm{
    message: string,
    file: Nullable<File>
}

const MessengerInput : FC = () => {
  const { submit, form } = useForm<MessengerForm>(null)
  const { actions } = useMessengerSocket()
  const roomId = useSelector(MessengerSelectors.selectedId)
  const onChange = useTyping()

  const resetValue = () => {
    form.setValue('message', '')
    form.setValue('file', null)
  }

  const onSubmit = (values : MessengerForm) => {
    if (values.message) {
      actions.sendMessage(roomId, values)
    }
    resetValue()
  }

  useEffect(resetValue, [roomId])


  return <MessageBar submit={submit(onSubmit)} form={form}
    onChange={onChange} />
}


export default MessengerInput

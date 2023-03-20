import { FC, memo, useCallback, useEffect } from 'react'
import { useForm } from 'shared/lib/hooks'
import { MessageBar } from 'entities/Messenger'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useSelector } from 'shared/types/redux'
import { MessengerSelectors } from 'widgets/Messenger'
import { useTyping } from 'widgets/Messenger/lib/hooks/useTyping'
import { Nullable } from 'shared/types/common'


export interface MessengerForm{
    message: string,
    file: Nullable<File>
}

const MessengerInput = memo(() => {
  const { submit, form } = useForm<MessengerForm>(null)
  const { actions } = useMessengerSocket()
  const roomId = useSelector(MessengerSelectors.selectedId)
  const onChange = useTyping()

  const resetValue = useCallback(() => {
    form.setValue('message', '')
    form.setValue('file', null)
  }, [])

  const onSubmit = useCallback((values : MessengerForm) => {
    if (values.message) {
      actions.sendMessage(roomId, values)
    }
    resetValue()
  }, [roomId])

  useEffect(resetValue, [roomId])


  return <MessageBar submit={submit(onSubmit)} form={form}
    onChange={onChange} />
})


export default MessengerInput

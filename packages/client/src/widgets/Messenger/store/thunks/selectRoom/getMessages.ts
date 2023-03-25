import { createThunk } from 'shared/types/redux'
import { isError } from 'shared/lib/helpers'
import { messengerActions } from 'widgets/Messenger'
import { AuthSelectors } from 'widgets/Login'

interface GetMessages{
    roomId: number,
    page?: number
}

export const getMessages = createThunk('messenger/SELECT_ROOM',
    async ({ roomId, page = 0 }: GetMessages, { dispatch, extra, getState }) => {
      const userId = AuthSelectors.userId(getState())
      const messages = await extra.api.messenger.selectRoom(roomId, userId, page)
      if (isError(messages)) {
        return
      }
      dispatch(messengerActions.setMessages(messages.data))
    })

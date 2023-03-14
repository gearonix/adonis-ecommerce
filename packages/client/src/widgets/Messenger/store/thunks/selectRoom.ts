import { createThunk } from 'shared/types/redux'
import { isError } from 'shared/lib/helpers'
import { messengerActions } from 'widgets/Messenger'
import { AuthSelectors } from 'shared/selectors'

export const selectRoom = createThunk('messenger/SELECT_ROOM',
    async (roomId: number, { dispatch, extra, getState }) => {
      const userId = AuthSelectors.userId(getState())
      const messages = await extra.api.messenger.selectRoom(roomId, userId)
      if (isError(messages)) {
        return
      }
      dispatch(messengerActions.setMessages(messages.data))
    })

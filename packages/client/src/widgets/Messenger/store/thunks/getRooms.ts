import { createThunk } from 'shared/types/redux'
import { isError } from 'shared/lib/helpers'
import { messengerActions } from 'widgets/Messenger'
import { AuthSelectors } from 'widgets/Login'

export const getRooms = createThunk('messenger/GET_ROOMS',
    async (_, { dispatch, extra, getState }) => {
      const userId = AuthSelectors.userId(getState())
      const rooms = await extra.api.messenger.getRooms(userId)
      if (isError(rooms)) {
        return
      }
      dispatch(messengerActions.setRooms(rooms.data))
    })

import { createThunk } from 'shared/types/redux'

export const getRooms = createThunk('messenger/GET_ROOMS',
    async (_, { dispatch, extra }) => {
      const rooms = await extra.api.messenger.getRooms()
      console.log(rooms)
    })

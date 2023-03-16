import { RequiredState } from 'app/store/types'
import { selectOpponentUser } from 'widgets/Messenger/lib/helpers'
import { Helpers } from 'shared/lib/helpers'

export const selectFilteredRooms = ({ messenger, auth }: RequiredState) => {
  const getOpponentUser = selectOpponentUser(auth.userId)
  const helpers = new Helpers()
  const filter = messenger.rooms.filter?.toLowerCase()
  const rooms = messenger.rooms.data
  return filter ? rooms.filter((room) => helpers.toNormalName(getOpponentUser(room))
      .toLowerCase().includes(filter)) : rooms
}

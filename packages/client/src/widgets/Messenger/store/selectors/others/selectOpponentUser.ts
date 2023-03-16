import { RequiredState } from 'app/store/types'
import { Room } from 'widgets/Messenger'

export const selectOpponentUser = ({ auth, messenger }: RequiredState) => {
  const selectedId = messenger.selectedId
  const userId = auth.userId
  const room = messenger.rooms.data.find((room: Room) => room.roomId === selectedId)
  if (!room) {
    return null
  }
  return room.starterId === userId ? room.invitedUser : room.starterUser
}

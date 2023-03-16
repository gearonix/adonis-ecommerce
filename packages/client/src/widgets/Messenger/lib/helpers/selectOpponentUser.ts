import { Nullable } from 'shared/types/common'
import { Room } from 'widgets/Messenger'

export const selectOpponentUser = (userId: Nullable<number>) => (room: Room) => {
  return room.starterId === userId ? room.invitedUser : room.starterUser
}

import { Room } from 'shared/types/slices'
import { Nullable } from 'shared/types/common'

export const selectOpponentUser = (userId: Nullable<number>) => (room: Room) => {
  return room.starterId === userId ? room.invitedUser : room.starterUser
}

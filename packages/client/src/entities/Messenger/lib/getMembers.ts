import { Helpers } from 'shared/lib/helpers'
import { Room } from 'widgets/Messenger'

export const getMembers = (room: Room) => {
  const helpers = new Helpers()
  return helpers.cropped([helpers.toNormalName(room.invitedUser),
    helpers.toNormalName(room.starterUser)]
      .join(', '), 13)
}

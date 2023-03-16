import { Room } from 'shared/types/slices'
import { Helpers } from 'shared/lib/helpers'

export const getMembers = (room: Room) => {
  const helpers = new Helpers()
  return helpers.cropped([helpers.toNormalName(room.invitedUser),
    helpers.toNormalName(room.starterUser)]
      .join(', '), 13)
}

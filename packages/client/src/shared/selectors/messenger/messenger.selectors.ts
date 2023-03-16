import { RequiredState } from 'app/store/types'
import { selectOpponentUser } from 'widgets/Messenger/lib/helpers'
import { Helpers } from 'shared/lib/helpers'

const MessengerSelectors = {
  rooms: ({ messenger }: RequiredState) => messenger.rooms.data,
  messages: ({ messenger }: RequiredState) => messenger.messages,
  selectedId: ({ messenger }: RequiredState) => messenger?.selectedId,
  filter: ({ messenger }: RequiredState) => messenger.rooms.filter,
  opponentUser: ({ auth, messenger }: RequiredState) => {
    const selectedId = messenger.selectedId
    const userId = auth.userId
    const room = messenger.rooms.data.find((room) => room.roomId === selectedId)
    if (!room) {
      return null
    }
    return room.starterId === userId ? room.invitedUser : room.starterUser
  },
  filteredRooms: ({ messenger, auth }: RequiredState) => {
    const getOpponentUser = selectOpponentUser(auth.userId)
    const helpers = new Helpers()
    const filter = messenger.rooms.filter?.toLowerCase()
    const rooms = messenger.rooms.data
    return filter ? rooms.filter((room) => helpers.toNormalName(getOpponentUser(room))
        .toLowerCase().includes(filter)) : rooms
  },
  userStatus: ({ messenger }: RequiredState) => {
    return !messenger.isTyping ? messenger.status : 'typing...'
  }

}


export default MessengerSelectors

import { RequiredState } from 'app/store/types'
import { selectOpponentUser } from 'widgets/Messenger/lib/helpers'
import { Helpers } from 'shared/lib/helpers'

const MessengerSelectors = {
  rooms: ({ messenger }: RequiredState) => messenger.rooms.data,
  messages: ({ messenger }: RequiredState) => messenger.messages,
  selectedId: ({ messenger }: RequiredState) => messenger?.selectedId as number,
  filter: ({ messenger }: RequiredState) => messenger.rooms.filter,
  userStatus: ({ messenger }: RequiredState) => {
    return !messenger.isTyping ? messenger.status : 'typing...'
  }

}


export default MessengerSelectors

import { RequiredState } from 'app/store/types'

const MessengerSelectors = {
  rooms: ({ messenger }: RequiredState) => messenger.rooms.data,
  messages: ({ messenger }: RequiredState) => messenger.messages,
  selectedId: ({ messenger }: RequiredState) => messenger?.selectedId as number,
  filter: ({ messenger }: RequiredState) => messenger.rooms.filter,
  userStatus: ({ messenger }: RequiredState) => {
    return !messenger.isTyping ? messenger.status : 'typing...'
  },
  page: ({ messenger }: RequiredState) => messenger.page

}


export default MessengerSelectors

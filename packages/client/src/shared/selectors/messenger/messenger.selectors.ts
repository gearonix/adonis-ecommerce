import { RequiredState } from 'app/store/types'

const MessengerSelectors = {
  rooms: ({ messenger }: RequiredState) => messenger.rooms,
  messages: ({ messenger }: RequiredState) => messenger.messages,
  selectedId: ({ messenger }: RequiredState) => messenger.selectedId
}


export default MessengerSelectors

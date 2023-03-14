import { Nullable } from 'shared/types/common'
import { User } from 'shared/types/slices/user'

export interface MessengerSlice{
    rooms: {
        data: Room[],
        filter: Nullable<string>
    },
    messages: Message[],
    selectedId: Nullable<number>,
    isTyping: boolean
}

export interface Room{
    roomId: number,
    starterId: number,
    invitedId: number,
    creationDate: string,
    starterUser: User,
    invitedUser: User
}

export interface Message{
    roomId: number,
    senderId: number,
    messageText: string
    creationDate: string,
    messageId: number
}

export const messengerInitialState: MessengerSlice = {
  rooms: {
    data: [],
    filter: null
  },
  messages: [],
  selectedId: null,
  isTyping: false
}

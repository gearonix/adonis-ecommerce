import { Nullable } from 'shared/types/common'
import { User } from 'widgets/Profile/store/slice/initialState/userInitialState'
import { UserStatus } from 'shared/config/consts/others'

export interface MessengerSlice{
    rooms: {
        data: Room[],
        filter: Nullable<string>
    },
    messages: Message[],
    selectedId: Nullable<number>,
    isTyping: boolean,
    status: UserStatus
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
    messageId: number,
    image: Nullable<string>,
    isRead: boolean,
    user: User
}

export const messengerInitialState: MessengerSlice = {
  rooms: {
    data: [],
    filter: null
  },
  messages: [],
  selectedId: null,
  isTyping: false,
  status: UserStatus.OFFLINE
}

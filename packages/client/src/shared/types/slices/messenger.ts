import { Nullable } from 'shared/types/common'

export interface MessengerSlice{
    rooms: Room[],
    messages: Message[],
    selectedId: Nullable<number>
}

export interface Room{
    roomId: number,
    members: number[],
    creationDate: string
}

export interface Message{
    roomId: number,
    senderId: number,
    messageText: string
    creationDate: string,
    messageId: number
}

export const messengerInitialState: MessengerSlice = {
  rooms: [],
  messages: [],
  selectedId: null
}

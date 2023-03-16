export interface NewMessage{
    roomId: number,
    messageText: string,
    file: unknown
    senderId?: number
}
export interface MakeMessageRead{
    roomId: number,
    messageId: number
}

import { AxiosResponse as Res, Nullable } from 'shared/types/common'
import { Room } from 'shared/types/slices'
import { Message } from 'shared/types/slices/messenger'

export interface MessengerApi {
    getRooms(userId: Nullable<number>): Res<Room[]>,
    selectRoom(roomId: number, userId: Nullable<number>): Res<Message[]>
}

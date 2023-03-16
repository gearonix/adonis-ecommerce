import { AxiosResponse as Res, Nullable } from 'shared/types/common'
import { Message, Room } from 'widgets/Messenger/store/slice/initialState'

export interface MessengerApi {
    getRooms(userId: Nullable<number>): Res<Room[]>,
    selectRoom(roomId: number, userId: Nullable<number>): Res<Message[]>
}

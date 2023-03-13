import { MessengerRoomsEntity } from '@app/entities';
import { Repository } from 'typeorm';
export declare class MessengerRoomsService {
    private rooms;
    constructor(rooms: Repository<MessengerRoomsEntity>);
    startChat(members: number[]): Promise<MessengerRoomsEntity>;
    private getRoomByMembers;
    getUserRooms(userId: number): Promise<any>;
}

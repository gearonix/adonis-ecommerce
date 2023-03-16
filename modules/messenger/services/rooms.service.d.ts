import { MessengerRoomsEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { AuthService } from '@modules/auth';
export declare class RoomsService {
    private rooms;
    private authService;
    constructor(rooms: Repository<MessengerRoomsEntity>, authService: AuthService);
    startChat(starterId: number, invitedId: number): Promise<MessengerRoomsEntity>;
    private getRoomByMembers;
    getUserRooms(userId: number): Promise<MessengerRoomsEntity[]>;
    checkUserHasRoom(roomId: number, userId: number): Promise<void>;
    getOpponentId(roomId: number, userId: number): Promise<number>;
}

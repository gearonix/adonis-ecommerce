import { MessengerRoomsEntity, UserMessagesEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { AuthService } from '@modules/auth';
import { NewMessage } from '@modules/messenger/gateways/chat/requestTypes';
export declare class MessengerRoomsService {
    private rooms;
    private messages;
    private authService;
    constructor(rooms: Repository<MessengerRoomsEntity>, messages: Repository<UserMessagesEntity>, authService: AuthService);
    startChat(starterId: number, invitedId: number): Promise<MessengerRoomsEntity>;
    private getRoomByMembers;
    getUserRooms(userId: number): Promise<MessengerRoomsEntity[]>;
    selectRoom(roomId: number, userId: number): Promise<UserMessagesEntity[]>;
    saveMessage(message: NewMessage): Promise<NewMessage & UserMessagesEntity>;
    private checkUserHasRoom;
}

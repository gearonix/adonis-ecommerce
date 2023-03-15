import { MessengerRoomsEntity, UserMessagesEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { AuthService } from '@modules/auth';
import { NewMessage } from '@modules/messenger/gateways/chat/requestTypes';
import { FilesService } from '@modules/files/files.service';
export declare class MessengerRoomsService {
    private rooms;
    private messages;
    private authService;
    private fileService;
    constructor(rooms: Repository<MessengerRoomsEntity>, messages: Repository<UserMessagesEntity>, authService: AuthService, fileService: FilesService);
    startChat(starterId: number, invitedId: number): Promise<MessengerRoomsEntity>;
    private getRoomByMembers;
    getUserRooms(userId: number): Promise<MessengerRoomsEntity[]>;
    selectRoom(roomId: number, userId: number): Promise<UserMessagesEntity[]>;
    makeMessagesRead(roomId: number, userId: number): Promise<import("typeorm").UpdateResult>;
    makeMessageRead(messageId: number): Promise<import("typeorm").UpdateResult>;
    private getOpponentId;
    saveMessage({ file, ...message }: NewMessage): Promise<{
        image: string;
        roomId: number;
        messageText: string;
        senderId?: number;
    } & UserMessagesEntity>;
    private checkUserHasRoom;
}

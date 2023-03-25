import { RoomsService } from '@modules/messenger/index';
import { AuthService } from '@modules/auth';
import { MessagesService } from '@modules/messenger/services/messages.service';
export declare class MessengerController {
    private roomsService;
    private messagesService;
    private authService;
    constructor(roomsService: RoomsService, messagesService: MessagesService, authService: AuthService);
    getUserRooms(userId: number): Promise<import("../../entities/messenger-rooms.entity").MessengerRoomsEntity[]>;
    selectRoom(id: string, userId: number, page: string): Promise<import("../../entities/user-messages.entity").UserMessagesEntity[]>;
}

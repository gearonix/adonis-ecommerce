import { MessengerRoomsService } from '@modules/messenger';
import { AuthService } from '@modules/auth';
export declare class MessengerController {
    private roomsService;
    private authService;
    constructor(roomsService: MessengerRoomsService, authService: AuthService);
    getUserRooms(userId: number): Promise<any>;
    selectRoom(id: string, userId: number): Promise<import("../../../entities/user-messages.entity").UserMessagesEntity[]>;
}

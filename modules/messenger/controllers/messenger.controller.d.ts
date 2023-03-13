import { MessengerRoomsService } from '@modules/messenger';
import { AuthService } from '@modules/auth';
export declare class MessengerController {
    private roomsService;
    private authService;
    constructor(roomsService: MessengerRoomsService, authService: AuthService);
    getUserRooms(): Promise<any>;
}

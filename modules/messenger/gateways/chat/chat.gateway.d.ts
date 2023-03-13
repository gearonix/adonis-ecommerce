import { Socket } from 'socket.io';
import { StatusGateway } from '../status/status.gateway';
import { MessengerRoomsService } from '@modules/messenger';
export declare class ChatGateway {
    private statusGateway;
    private roomsService;
    server: any;
    constructor(statusGateway: StatusGateway, roomsService: MessengerRoomsService);
    startChat(invitedId: number, client: Socket): Promise<void>;
}

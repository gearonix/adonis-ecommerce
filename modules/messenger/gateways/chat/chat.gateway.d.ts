import { Server, Socket } from 'socket.io';
import { StatusGateway } from '../status/status.gateway';
import { MessengerRoomsService } from '@modules/messenger';
import { NewMessage } from './requestTypes';
export declare class ChatGateway {
    private statusGateway;
    private roomsService;
    server: Server;
    constructor(statusGateway: StatusGateway, roomsService: MessengerRoomsService);
    startChat(invitedId: number, client: Socket): Promise<void>;
    makeRoomSubscription(roomId: number, client: Socket): Promise<void>;
    unsubscribeFromRoom(roomId: number, client: Socket): Promise<void>;
    sendMessage(message: NewMessage, client: Socket): Promise<void>;
    private getUserIdByHeaders;
}

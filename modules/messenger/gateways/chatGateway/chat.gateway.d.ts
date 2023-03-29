import { Server, Socket } from 'socket.io';
import { StatusGateway } from '../statusGateway/status.gateway';
import { RoomsService } from '@modules/messenger';
import { NewMessage } from './requestTypes';
import { UserMessagesEntity } from '@app/entities';
import { MessagesService } from '@modules/messenger/services/messages.service';
export declare class ChatGateway {
    private statusGateway;
    private roomsService;
    private messagesService;
    server: Server;
    constructor(statusGateway: StatusGateway, roomsService: RoomsService, messagesService: MessagesService);
    startChat(invitedId: number, client: Socket): Promise<void>;
    makeRoomSubscription(roomId: number, client: Socket): Promise<void>;
    unsubscribeFromRoom(roomId: number, client: Socket): Promise<void>;
    sendMessage(message: NewMessage, client: Socket): Promise<void>;
    makeMessageRead(message: UserMessagesEntity, client: Socket): Promise<void>;
    userTyping(roomId: number, client: Socket): Promise<void>;
    noLongerTyping(roomId: number, client: Socket): Promise<void>;
    private getUserIdByHeaders;
}

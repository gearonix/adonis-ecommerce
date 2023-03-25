import { UserMessagesEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { NewMessage } from '@modules/messenger/gateways/chatGateway/requestTypes';
import { FilesService } from '@modules/files/files.service';
import { RoomsService } from '@modules/messenger';
export declare class MessagesService {
    private messages;
    private fileService;
    private roomService;
    constructor(messages: Repository<UserMessagesEntity>, fileService: FilesService, roomService: RoomsService);
    selectRoom(roomId: number, userId: number, page: string): Promise<UserMessagesEntity[]>;
    makeMessagesRead(roomId: number, userId: number): Promise<import("typeorm").UpdateResult>;
    makeMessageRead(messageId: number): Promise<import("typeorm").UpdateResult>;
    saveMessage({ file, ...message }: NewMessage): Promise<UserMessagesEntity>;
}

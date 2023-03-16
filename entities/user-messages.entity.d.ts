import { UsersEntity } from '@entities/users.entity';
export declare class UserMessagesEntity {
    creationDate: Date;
    roomId: number;
    senderId: number;
    messageId: number;
    messageText: string;
    image: string;
    isRead: boolean;
    user: UsersEntity;
}

import { UsersEntity } from '@entities/users.entity';
export declare class MessengerRoomsEntity {
    creationDate: Date;
    starterId: number;
    invitedId: number;
    roomId: number;
    starterUser: UsersEntity;
    invitedUser: UsersEntity;
}

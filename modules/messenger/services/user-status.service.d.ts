import { UserStatus } from '@app/types/global';
export declare class UserStatusService {
    private onlineUsers;
    addUser(userId: number): void;
    removeUser(userId: number): void;
    getOnlineStatus(userId: number): UserStatus;
}

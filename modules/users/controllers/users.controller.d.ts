import { UsersService } from '@modules/users';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUser(id: any): Promise<import("../../../entities/users.entity").UsersEntity & {
        isMe: boolean;
    }>;
}

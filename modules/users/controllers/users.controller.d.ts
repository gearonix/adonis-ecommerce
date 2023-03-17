import { UsersService } from '@modules/users';
import { UsersDTO } from '@modules/users/dto/usersDTO';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUser(id: any): Promise<{
        isMe: boolean;
        status: import("../../../types/global").UserStatus;
        role: import("../../../types/global").Roles;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        avatar: string;
        background: string;
        description: string;
        userId: number;
        country: string;
        city: string;
        registration_date: Date;
        google_sub: string;
        user: import("../../../entities/users.entity").UsersEntity[];
    }>;
    getUsers(query: UsersDTO): Promise<{
        data: import("../../../entities/users.entity").UsersEntity[];
        count: number;
    }>;
}

import { UsersEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { RegisterUserDTO } from '@app/modules/users/dto/authDTO';
import { AuthService } from '@app/modules/auth';
import { UserStatusService } from '@modules/messenger';
import { UsersDTO } from '@modules/users/dto/usersDTO';
export declare class UsersService {
    private users;
    private authService;
    private userStatusService;
    constructor(users: Repository<UsersEntity>, authService: AuthService, userStatusService: UserStatusService);
    getUsers(query: UsersDTO): Promise<{
        data: UsersEntity[];
        count: number;
    }>;
    getIdAndPasswordByEmail(email: string): Promise<UsersEntity>;
    createUser(user: RegisterUserDTO): Promise<RegisterUserDTO & UsersEntity>;
    getUserById(userId: number): Promise<{
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
        user: UsersEntity[];
    }>;
    getIdByGoogleSub(googleSub: string): Promise<UsersEntity>;
    getUserAvatar(userId: number): Promise<string>;
    getUserBackground(userId: number): Promise<string>;
    getUserRoleById(userId: number): Promise<import("../../../types/global").Roles>;
}

import { UsersEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { RegisterUserDTO } from '@app/modules/users/dto/authDTO';
import { AuthService } from '@app/modules/auth';
export declare class UsersService {
    private users;
    private authService;
    constructor(users: Repository<UsersEntity>, authService: AuthService);
    getIdAndPasswordByEmail(email: string): Promise<UsersEntity>;
    createUser(user: RegisterUserDTO): Promise<RegisterUserDTO & UsersEntity>;
    getUserById(userId: number): Promise<UsersEntity & {
        isMe: boolean;
    }>;
    getIdByGoogleSub(googleSub: string): Promise<UsersEntity>;
    getUserAvatar(userId: number): Promise<string>;
    getUserBackground(userId: number): Promise<string>;
    getUserRoleById(userId: number): Promise<import("../../../types/global").Roles>;
}

import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@app/modules/users';
import { RegisterUserDTO, UserLoginDTO } from '../../users';
import { ReturnToken } from '@app/modules/auth/types/returnTypes';
import { TokenService } from '@app/modules/auth/services/token.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private tokenService;
    constructor(usersService: UsersService, jwtService: JwtService, tokenService: TokenService);
    login(userDto: UserLoginDTO): Promise<ReturnToken>;
    registration(user: RegisterUserDTO): Promise<ReturnToken>;
    private validateUser;
    getUserId(): Promise<number>;
    checkUserRole(): Promise<void>;
}

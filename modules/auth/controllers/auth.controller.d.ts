import { AuthService } from '@app/modules/auth';
import { RegisterUserDTO, UserLoginDTO } from '@app/modules/users';
import { TokenService } from '@app/modules/auth/services/token.service';
export declare class AuthController {
    private authService;
    private tokenService;
    constructor(authService: AuthService, tokenService: TokenService);
    login(user: UserLoginDTO): Promise<import("../types/returnTypes").ReturnToken>;
    registration(user: RegisterUserDTO): Promise<import("../types/returnTypes").ReturnToken>;
}

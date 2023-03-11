import { TokenService } from '@app/modules/auth/services/token.service';
export declare class TokenController {
    private tokenService;
    constructor(tokenService: TokenService);
    GetUserData(): Promise<import("../../../entities/users.entity").UsersEntity & {
        isMe: boolean;
    }>;
    cookieClear(): void;
}

import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@app/modules/users';
import { GoogleDTO } from '../../users';
import { ReturnToken } from '@app/modules/auth/types/returnTypes';
import { AuthService } from '@app/modules/auth';
import { TokenService } from '@app/modules/auth/services/token.service';
export declare class GoogleService {
    private usersService;
    private jwtService;
    private authService;
    private tokenService;
    constructor(usersService: UsersService, jwtService: JwtService, authService: AuthService, tokenService: TokenService);
    signupWithGoogle({ jwt, role }: GoogleDTO): Promise<ReturnToken>;
    private convertGoogleData;
    loginWithGoogle(jwt: string): Promise<ReturnToken>;
}

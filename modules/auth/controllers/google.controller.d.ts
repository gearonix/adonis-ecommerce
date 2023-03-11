import { GoogleDTO } from '@app/modules/users';
import { GoogleService } from '@app/modules/auth/services/google.service';
import { TokenService } from '@app/modules/auth/services/token.service';
export declare class GoogleController {
    private googleService;
    private tokenService;
    constructor(googleService: GoogleService, tokenService: TokenService);
    registrationByGoogle({ jwt, role }: GoogleDTO): Promise<import("../types/returnTypes").ReturnToken>;
    loginByGoogle(request: GoogleDTO): Promise<import("../types/returnTypes").ReturnToken>;
}

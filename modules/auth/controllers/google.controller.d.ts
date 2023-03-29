import { GoogleDTO } from '@app/modules/users';
import { GoogleService } from '@app/modules/auth/services/google.service';
export declare class GoogleController {
    private googleService;
    constructor(googleService: GoogleService);
    registrationByGoogle({ jwt, role }: GoogleDTO): Promise<import("../types/returnTypes").ReturnToken>;
    loginByGoogle(request: GoogleDTO): Promise<import("../types/returnTypes").ReturnToken>;
}

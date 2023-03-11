import { Roles } from '@app/types/global';
export declare class UserLoginDTO {
    readonly email: string;
    readonly password: string;
}
export declare class RegisterUserDTO extends UserLoginDTO {
    readonly firstName?: string;
    readonly lastName?: string;
    readonly google_sub?: string;
    readonly role: Roles;
}

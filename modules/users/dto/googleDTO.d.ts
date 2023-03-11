import { RegisterUserDTO } from '@app/modules/users/dto/authDTO';
import { Roles } from '@app/types/global';
export declare class GoogleRegisterDTO extends RegisterUserDTO {
    readonly avatar: string;
}
export declare class GoogleDTO {
    readonly jwt: string;
    readonly role?: Roles;
}
export declare class GoogleData {
    readonly email: string;
    readonly family_name: string;
    readonly given_name: string;
    readonly sub: string;
    readonly picture: string | null;
}

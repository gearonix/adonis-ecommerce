import {Roles} from "@app/lib";

export class UserDTO {
    readonly email: string;
    readonly password: string;
    readonly first_name?: string;
    readonly last_name?: string;
    readonly role: Roles
}

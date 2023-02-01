import {Roles} from "@app/lib";


export class UserLoginDTO {
    readonly email: string;
    readonly password: string;
}


export class UserDTO extends UserLoginDTO {
    readonly first_name?: string;
    readonly last_name?: string;
    readonly role: Roles
}



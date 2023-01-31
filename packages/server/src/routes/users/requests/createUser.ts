import {Roles} from "@app/lib";

export class CreateUser {
    readonly email: string;
    readonly password: string;
    readonly first_name?: string;
    readonly last_name?: string;
    readonly role: Roles
}

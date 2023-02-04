import {Roles} from '@app/lib'

export class UserLoginDTO {
    readonly email: string
    readonly password: string
}

export class RegisterUserDTO extends UserLoginDTO {
    readonly first_name?: string
    readonly last_name?: string
    readonly google_sub?: string
    readonly role: Roles
}

export class GoogleRegisterDTO extends RegisterUserDTO {
    readonly avatar: string
}

export class GoogleDTO {
    readonly jwt: string
    readonly role: Roles
}

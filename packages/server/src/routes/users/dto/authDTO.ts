import {IsEmail, IsIn, IsOptional, IsString, Length} from "class-validator";
import {ValidationExceptions} from "@app/types/exceptions";
import {Lengths, Roles} from "@app/types/models";

export class UserLoginDTO {
    @IsEmail({}, {message: ValidationExceptions.INVALID_EMAIL})
    readonly email: string
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(8, Lengths.HASH, {message: ValidationExceptions.LENGTH_IS_NOT_CORRECT})
    readonly password: string
}

export class RegisterUserDTO extends UserLoginDTO {
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(3, Lengths.TITLE, {message: ValidationExceptions.LENGTH_IS_NOT_CORRECT})
    @IsOptional()
    readonly firstName?: string
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(3, Lengths.TITLE, {message: ValidationExceptions.LENGTH_IS_NOT_CORRECT})
    @IsOptional()
    readonly lastName?: string
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(0, Lengths.LONGTEXT, {message: ValidationExceptions.LENGTH_IS_NOT_CORRECT})
    @IsOptional()
    readonly google_sub?: string
    @IsIn([Roles.CUSTOMER, Roles.SALESMAN])
    readonly role: Roles
}

import {Lengths, Roles} from '@app/lib'
import {IsEmail, IsIn, IsOptional, IsString, Length} from 'class-validator'
import {ValidationExceptions} from '@app/types/exceptions'
import {RegisterUserDTO} from '@app/routes/users/dto/authDTO'

export class GoogleRegisterDTO extends RegisterUserDTO {
  @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
  @Length(0, Lengths.IMAGE, {
    message: ValidationExceptions.LENGTH_IS_NOT_CORRECT,
  })
  readonly avatar: string
}

export class GoogleDTO {
  @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
  readonly jwt: string
  @IsOptional()
  @IsIn([Roles.CUSTOMER, Roles.SALESMAN])
  readonly role?: Roles
}

export class GoogleData {
  @IsEmail({}, {message: ValidationExceptions.INVALID_EMAIL})
  readonly email: string
  readonly family_name: string
  readonly given_name: string
  readonly sub: string
  readonly picture: string | null
}

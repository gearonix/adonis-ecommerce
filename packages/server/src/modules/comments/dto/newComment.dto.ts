import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'
import { ValidationExceptions } from '@app/types/exceptions'

export class NewCommentDTO {
    @IsString({ message: ValidationExceptions.MUST_BE_A_STRING })
    @Length(3, 170, {
      message: ValidationExceptions.LENGTH_IS_NOT_CORRECT
    })
  readonly message: string
    @IsNumber()
    @IsNotEmpty()
    readonly productId : number
}

import {Lengths} from '@app/types/global'
import {IsIn, IsOptional, IsString, Length} from 'class-validator'
import {ValidationExceptions} from '@app/types/exceptions'
import {ProductModels, ProductRatings, ProductSizes, ProductTypes} from '@app/entities/products/types'

export class ProductDTO {
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(3, Lengths.TINY_TITLE, {
      message: ValidationExceptions.LENGTH_IS_NOT_CORRECT,
    })
  readonly name: string
    readonly price: number
    readonly rating: ProductRatings
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(3, Lengths.LONGTEXT, {
      message: ValidationExceptions.LENGTH_IS_NOT_CORRECT,
    })
    readonly description: string
    readonly inStock: boolean
    readonly images: string[]
    readonly features: string[]
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(3, Lengths.TITLE, {
      message: ValidationExceptions.LENGTH_IS_NOT_CORRECT,
    })
    @IsOptional()
    readonly material?: string
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(3, Lengths.TINYTEXT, {
      message: ValidationExceptions.LENGTH_IS_NOT_CORRECT,
    })
    @IsIn([ProductTypes.TYPE1, ProductTypes.TYPE2])
    readonly type: ProductTypes
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(3, Lengths.TINY_TITLE, {
      message: ValidationExceptions.LENGTH_IS_NOT_CORRECT,
    })
    @IsOptional()
    readonly design?: string
    readonly warrantyCount?: number
    @IsString({message: ValidationExceptions.MUST_BE_A_STRING})
    @Length(3, Lengths.TINY_TITLE, {
      message: ValidationExceptions.LENGTH_IS_NOT_CORRECT,
    })
    @IsIn([ProductModels.MODEL1, ProductModels.MODEL2])
    readonly model: ProductModels
    @IsIn(ProductSizes)
    readonly size?: typeof ProductSizes[number]
}

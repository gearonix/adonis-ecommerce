import { IsNumber, IsString } from 'class-validator'

export class SearchByUserIdDTO {
  @IsString()
    userId: string
}

export class SearchByIdsDTO {
  ids: number[]
}

export class SearchByProductIdDTO {
  @IsNumber()
    productId: number
}

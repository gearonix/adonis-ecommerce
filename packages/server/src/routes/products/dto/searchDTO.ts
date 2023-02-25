import {ProductModels, ProductRatings, ProductSizes, ProductTypes} from '@app/entities/products/types'

export interface SearchDTO{
    size: typeof ProductSizes[number],
    model: ProductModels,
    type: ProductTypes,
    rating: ProductRatings,
    search: string,
    page: string,
    inStock: string
}

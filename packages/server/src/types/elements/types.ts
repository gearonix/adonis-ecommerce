export type ProductRatings = 1 | 2 | 3 | 4 | 5

export enum ProductTypes{
    ELECTRONICS = 'Electronics',
    CLOTHES = 'Clothes',
    SHOES = 'Shoes',
    CHILDREN = 'Children products',
    SPORTS = 'Sports and recreation',
    FOOD = 'Food'
}

export enum ProductModels{
    LATEST = 'Latest',
    NEW = 'New',
    OLD = 'Slightly old',
    OUTDATED = 'Outdated'
}
export const ProductSizes = ['Very little', 'Small', 'Medium',
  'Massive', 'Large', 'Epic'] as const



import {ProductModels, ProductRatings, ProductSizes, ProductTypes} from 'shared/types/elements/productTypes'
import {KeyOf} from 'shared/types/common'

type WithCount = {
    data: Product[],
    count: number,
    page: number,
}

export interface ProductsSlice{
    products: WithCount,
    myProducts: WithCount
}


export interface Product{
    name: string,
    price: number,
    rating: ProductRatings,
    description: string,
    inStock: boolean,
    images: string[],
    savedCount: number,
    salesmanId: number,
    features: string[],
    material: string,
    type: KeyOf<typeof ProductTypes>,
    design: string,
    model: KeyOf<typeof ProductModels>,
    size: KeyOf<typeof ProductSizes>,
    productId: number
}

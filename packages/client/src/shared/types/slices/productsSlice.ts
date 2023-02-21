import {ProductModels, ProductRatings, ProductSizes, ProductTypes} from 'widgets/Products/lib/consts/productTypes'
import {KeyOf} from 'shared/types/common'

export interface ProductsSlice{
    products: Product[],
    myProducts: Product[]
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

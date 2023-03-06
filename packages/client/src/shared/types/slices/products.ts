import { ProductModels, ProductRatings, ProductSizes, ProductTypes } from 'shared/types/elements/productTypes'
import { KeyOf, ObjectNullable } from 'shared/types/common'
import { SearchQuery } from 'widgets/Products/types'


export interface Products {
    products: Product[],
    count: number,
    filter: ObjectNullable<SearchQuery>,
    isLoading: boolean
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

export const productsInitialState: Products = {
  products: [],
  count: 0,
  filter: {
    search: null,
    model: null,
    size: null,
    rating: null,
    type: null,
    page: 0,
    inStock: null
  },
  isLoading: false
}

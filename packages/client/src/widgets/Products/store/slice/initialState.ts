import { ProductModels, ProductRatings, ProductSizes, ProductTypes } from 'shared/types/elements/productTypes'
import { KeyOf, ObjectNullable } from 'shared/types/common'
import { ProductsView, SearchQuery } from 'widgets/Products/types'
import { User } from 'widgets/Profile'


export interface ProductsSlice {
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
    productId: number,
    creationDate: string,
    salesman: User
}

export const productsInitialState: ProductsSlice = {
  products: [],
  count: 0,
  filter: {
    search: null,
    model: null,
    size: null,
    rating: null,
    type: null,
    page: 0,
    inStock: null,
    view: ProductsView.NORMAL
  },
  isLoading: false
}

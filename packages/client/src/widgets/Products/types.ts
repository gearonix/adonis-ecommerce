import {
  ProductFeatures,
  ProductModels,
  ProductRatings,
  ProductSizes,
  ProductTypes
} from 'shared/types/elements/productTypes'
import { KeyOf } from 'shared/types/common'

export interface AddProductForm {
    name: string
    description: string
    design: string
    rating: ProductRatings,
    inStock: boolean,
    price: number,
    warrantyCount: number,
    type: typeof ProductTypes,
    model: typeof ProductModels,
    size: typeof ProductSizes,
    features: typeof ProductFeatures,
    images: File[],
    material: string
}

export interface SearchControlsForm{
    size: KeyOf<typeof ProductSizes>,
    model: KeyOf<typeof ProductModels>,
    type: KeyOf<typeof ProductTypes>,
    rating: ProductRatings
}

export interface SearchQuery extends SearchControlsForm{
    search: string,
    page: number,
    inStock: boolean
}

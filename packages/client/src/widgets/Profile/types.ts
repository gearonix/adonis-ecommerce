import {
    ProductFeatures,
    ProductModels,
    ProductRatings,
    ProductSizes,
    ProductTypes,
} from 'widgets/Profile/lib/consts/productTypes'

export interface EditProfileForm{
    firstName: string
    lastName: string
    description: string
    country: string
    city: string
}

export interface AddProductForm{
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
    images: File[]
}

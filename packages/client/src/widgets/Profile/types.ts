import {ProductRatings} from "widgets/Profile/lib/consts/productTypes";

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
    rating: ProductRatings
}






export type CreateFormApi = {
    setValue(value: string): void,
    value: string
}


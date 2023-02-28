export interface EditProfileForm{
    firstName: string
    lastName: string
    description: string
    country: string
    city: string
}

export enum WallPages {
    posts = 'posts',
    products = 'products',
    saved = 'saved'
}

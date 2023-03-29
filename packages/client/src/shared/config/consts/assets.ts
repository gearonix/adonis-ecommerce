import { ProductTypesKeys } from 'shared/types/elements/productTypes'

export enum DefaultAssets{
    PRODUCT = `defaults/default_product.png`,
    AVATAR = `defaults/default_avatar.png`,
    POST = `defaults/default_post.jpg`,
    PROJECT = `defaults/default_project.png`,
    MESSAGE = `defaults/default_message.jpg`
}

export enum Assets{
    LOGO_DARK = 'logo-dark.png',
    LOGO_LIGHT = 'logo-light.png',
    LOGO_MOBILE = 'logo-mobile.png',
    NOT_FOUND = 'common/not_found.svg',
    APP_ERROR = 'common/app_error.png',
    ABOUT = 'common/about.png',
    BICYCLE = 'common/bicycle.png',
    ROCKET = 'common/rocket.png',
    THANKS = 'common/thanks.png',
    SEARCH_FORM = 'common/search_form.png'
}

export const ProductTypesAssets: Record<ProductTypesKeys, string> = {
  'Electronics': 'product_types/electronics.png',
  'Children products': 'product_types/children_products.jpg',
  'Clothes': 'product_types/clothes.jpeg',
  'Food': 'product_types/food.jpg',
  'Shoes': 'product_types/shoes.jpg',
  'Sports and recreation': 'product_types/sports.jpg'
}


export enum MyProjectsAssets{
    SpaceCalendar = 'my_projects/space-calendar.png'
}

export enum ThemesAssets{
    LIGHT = 'themes/light.svg',
    DARK = 'themes/dark.svg'
}

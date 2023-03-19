import { ProductTypesKeys } from 'shared/types/elements/productTypes'

export enum DefaultAssets{
    PRODUCT = '/assets/defaults/default_product.png',
    AVATAR = '/assets/defaults/default_avatar.png',
    POST = '/assets/defaults/default_post.jpg',
    PROJECT = '/assets/defaults/default_project.png',
    MESSAGE = '/assets/defaults/default_message.jpg'
}

export enum Assets{
    LOGO_DARK = '/assets/logo-dark.png',
    LOGO_LIGHT = '/assets/logo-light.png',
    NOT_FOUND = '/assets/common/not_found.svg',
    APP_ERROR = '/assets/common/app_error.png',
    ABOUT = '/assets/common/about.png',
    BICYCLE = '/assets/common/bicycle.png',
    ROCKET = '/assets/common/rocket.png',
    THANKS = '/assets/common/thanks.png',
    CHAT = '/assets/common/chat.png'
}

export const ProductTypesAssets: Record<ProductTypesKeys, string> = {
  'Electronics': '/assets/product_types/electronics.png',
  'Children products': '/assets/product_types/children_products.jpg',
  'Clothes': '/assets/product_types/clothes.jpeg',
  'Food': '/assets/product_types/food.jpg',
  'Shoes': '/assets/product_types/shoes.jpg',
  'Sports and recreation': '/assets/product_types/sports.jpg'
}


export enum MyProjectsAssets{
    SpaceCalendar = '/assets/my_projects/space-calendar.png'
}

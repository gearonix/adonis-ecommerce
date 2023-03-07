import { ProductTypesKeys } from 'shared/types/elements/productTypes'

export enum DefaultAssets{
    PRODUCT = '/assets/defaults/default_product.png',
    AVATAR = '/assets/defaults/default_avatar.png',
    POST = '/assets/defaults/default_post.jpg',
    PROJECT = '/assets/defaults/default_project.png'
}

export enum Assets{
    LOGO = '/assets/logo.svg',
    NOT_FOUND = '/assets/not_found.svg',
    APP_ERROR = '/assets/app_error.png',
    ABOUT = '/assets/about.png'
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

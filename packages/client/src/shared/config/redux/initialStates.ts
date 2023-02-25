import {CurrentProduct, Products, User} from 'shared/types/slices'
import {ObjectNullable} from 'shared/types/common'

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
    inStock: null,
  },
}
export const usersInitialState: ObjectNullable<User> = {
  role: null,
  firstName: null,
  lastName: null,
  email: null,
  avatar: null,
  background: null,
  description: null,
  country: null,
  city: null,
  userId: null,
  registration_date: null,
}

export const currentProductInitialState: ObjectNullable<CurrentProduct> = {
  name: null,
  description: null,
  productId: null,
  type: null,
  rating: null,
  size: null,
  model: null,
  images: null,
  price: null,
  design: null,
  inStock: null,
  features: null,
  material: null,
  salesmanId: null,
  savedCount: null,
  salesman: usersInitialState,
}

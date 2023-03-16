import { Product } from 'widgets/Products/store/slice/initialState'
import { User, usersInitialState } from 'widgets/Profile/store/slice/initialState/userInitialState'
import { ObjectNullable } from 'shared/types/common'


export interface CurrentProductSlice {
    productInfo: ObjectNullable<Product>,
    salesman: ObjectNullable<User>,
    comments: ProductComments,
    isLoading: boolean
}
export interface ProductComments{
    data: ProductComment[],
    page: number,
    count: number
}

export interface ProductComment{
    message: string,
    likes: number,
    date: string,
    commentId: number,
    user: User
}

export const productInitialState: CurrentProductSlice = {
  productInfo: {
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
    savedCount: null
  },
  salesman: usersInitialState,
  comments: {
    data: [],
    page: 0,
    count: 0
  },
  isLoading: false
}

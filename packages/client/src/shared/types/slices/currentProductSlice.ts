import {Product} from 'shared/types/slices/productsSlice'
import {User} from 'shared/types/slices/userSlice'
import {ObjectNullable} from 'shared/types/common'


export interface CurrentProduct{
    productInfo: ObjectNullable<Product>,
    salesman: ObjectNullable<User>,
    comments: ProductComments
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

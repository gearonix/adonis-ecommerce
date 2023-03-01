import {Product} from 'shared/types/slices/productsSlice'
import {User} from 'shared/types/slices/userSlice'
import {ObjectNullable} from 'shared/types/common'


export interface CurrentProduct{
    productInfo: Product,
    salesman: ObjectNullable<User>,
    comments: {
        data: ProductComment[],
        page: number
    }
}

export interface ProductComment{
    message: string,
    likes: number,
    date: string,
    commentId: number,
    user: User
}

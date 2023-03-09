import { AxiosResponse as Res } from 'shared/types/common'
import { CurrentProductSlice, ProductComment, ProductComments } from 'shared/types/slices'

export interface AddComment{
    message: string,
    productId: number
}

export interface CurrentProductApi {
    getProduct(id: number): Res<CurrentProductSlice>

    createComment(comment: AddComment): Res<ProductComment>

    setCommentsPage(productId: number, page: number): Res<ProductComments>
}

import { AxiosResponse as Res } from 'shared/types/common'
import { Product } from 'shared/types/slices'

export interface SavedModel{
    savedId: number,
    productId: number,
    userId: number
}

export interface SavedApi {
    getSaved(): Res<SavedModel[]>

    add(productId: number): Res<void>

    remove(productId: number): Res<void>

    setProducts(userId: number): Res<Product[]>
}

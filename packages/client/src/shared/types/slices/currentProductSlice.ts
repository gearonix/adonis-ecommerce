import {Product} from 'shared/types/slices/productsSlice'
import {User} from 'shared/types/slices/userSlice'
import {ObjectNullable} from 'shared/types/common'

export interface CurrentProduct extends Product{
    salesman: ObjectNullable<User>
}

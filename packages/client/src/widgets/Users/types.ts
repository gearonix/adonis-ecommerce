import { Nullable } from 'shared/types/common'
import { UserRoles } from 'app/config/globals'

export interface UsersForm{
    search?: string,
    role?: Nullable<UserRoles>,
    page?: number
}

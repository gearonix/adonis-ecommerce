import { Nullable } from 'shared/types/common'
import { UserRoles } from 'app/config/globals'
import { User } from 'widgets/Profile'

export interface UsersForm{
    search?: string,
    role?: Nullable<UserRoles>,
    page?: number
}

export interface NewUsers{
    count: number,
    data: User[]
}

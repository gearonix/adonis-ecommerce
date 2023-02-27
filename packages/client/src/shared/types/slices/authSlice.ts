import {ObjectNullable} from 'shared/types/common'

export type AuthSlice = ObjectNullable<{
    userId: number,
    isAuthorized: boolean,
    avatar: string,
    firstName: string,
    email: string
}>

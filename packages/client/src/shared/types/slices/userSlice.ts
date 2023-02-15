import {Roles} from 'shared/types/globals';

export interface UserSlice {
    role: Roles,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string,
    background: string,
    description: string
    country: string,
    city: string
    user_id: number,
    registration_date: string
}

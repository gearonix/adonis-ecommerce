import {Roles} from "app/config/paths";

export interface UserSlice {
    role: Roles,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string,
    background: string,
    description: string
    country: string,
    city: string
    user_id: number,
    registration_date: string
}

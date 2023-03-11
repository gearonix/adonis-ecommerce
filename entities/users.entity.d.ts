import { Roles } from '@app/types/global';
export declare class UsersEntity {
    role: Roles;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatar: string;
    background: string;
    description: string;
    userId: number;
    country: string;
    city: string;
    registration_date: Date;
    google_sub: string;
    user: UsersEntity[];
}

import { Roles } from '@app/types/global';
export declare class UsersDTO {
    readonly search?: string;
    readonly role: Roles | 'null';
    readonly page: string;
}

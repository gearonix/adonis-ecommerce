import { UsersDTO } from '@modules/users/dto/usersDTO';
import { Roles } from '@app/types/global';
export declare const createUsersQuery: (query: UsersDTO) => {
    [x: string]: Roles | import("typeorm").FindOperator<string>;
    role: Roles;
}[];

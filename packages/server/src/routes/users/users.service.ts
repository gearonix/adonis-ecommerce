import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersModel} from '@app/models'
import {Repository} from 'typeorm';
import {UserDTO} from './dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersModel)
        private users: Repository<UsersModel>,
    ) {
    }

    async getIdAndPasswordByEmail(email: string) {
        return await this.users.findOne({
            select: ['password', 'user_id'],
            where: {email}
        })
    }

    async createUser(user: UserDTO) {
        return await this.users.save(user)
    }

    async getUserById(user_id: number) {
        return await this.users.findOneBy({user_id})
    }
}

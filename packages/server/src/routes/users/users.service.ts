import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersModel} from '@app/models'
import {Repository} from 'typeorm';
import {CreateUser} from './requests';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersModel)
        private users: Repository<UsersModel>,
    ) {
    }

    async getUserByEmail(email: string) {
        const user = await this.users.findOneBy({email})
        return user
    }

    async createUser(user: CreateUser) {
        const newUser = await this.users.save(user)
        return newUser
    }
}

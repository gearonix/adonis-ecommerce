import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersModel} from '@app/models'
import {Repository} from 'typeorm';
import {RegisterUserDTO} from './dto';
import {GoogleData} from "@app/types/others";
import {Roles} from "@app/types/models";
import {generateId} from "@app/lib/helpers";
import {GoogleRegisterDTO} from './dto/dto';

//TODO: delete return-await
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

    async createUser(user: RegisterUserDTO) {
        return await this.users.save(user)
    }

    async getUserById(user_id: number) {
        return await this.users.findOneBy({user_id})
    }

    convertGoogleData(googleData: GoogleData, role: Roles): GoogleRegisterDTO {
        const {given_name, sub, family_name, email, picture} = googleData
        return {
            email,
            first_name: given_name,
            last_name: family_name,
            google_sub: sub,
            password: `google_generated__${generateId()}`,
            role,
            avatar: picture
        }
    }

    async getIdByGoogleSub(google_sub: string): Promise<UsersModel> {
        return this.users.findOneBy({google_sub})
    }
}

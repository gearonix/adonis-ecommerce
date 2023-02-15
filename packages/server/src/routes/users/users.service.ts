import {forwardRef, HttpException, HttpStatus, Inject} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {UsersModel} from '@app/models'
import {Repository} from 'typeorm'
import {GoogleData, GoogleRegisterDTO} from './dto/googleDTO'
import {Roles} from '@app/types/models'
import {generateId} from '@app/lib/helpers'
import {RegisterUserDTO} from "@app/routes/users/dto/authDTO";
import {ObjectOptional} from "@app/types/helpers";
import {EditProfileForm} from "@app/routes/users/dto/editProfileDTO";
import {AuthService} from "@app/routes/auth";
import {RequestContext} from "nestjs-request-context";
import {ServerExceptions} from "@app/types/exceptions";


export class UsersService {
    constructor(
        @InjectRepository(UsersModel)
        private users: Repository<UsersModel>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService
    ) {
    }

    async getIdAndPasswordByEmail(email: string) {
        return await this.users.findOne({
            select: ['password', 'user_id'],
            where: {email},
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
            firstName: given_name,
            lastName: family_name,
            google_sub: sub,
            password: `google_generated__${generateId()}`,
            role,
            avatar: picture,
        }
    }

    async getIdByGoogleSub(google_sub: string): Promise<UsersModel> {
        return this.users.findOneBy({google_sub})
    }

    async changeProfile(data: ObjectOptional<EditProfileForm>): Promise<UsersModel> {
        const req = RequestContext.currentContext.req
        const user_id = req.user.payload.user_id
        const response = await this.users.update({user_id}, data)
        if (!response.affected) {
            throw new HttpException(ServerExceptions.INCORRECT_USER_DATA, HttpStatus.ACCEPTED)
        }

        return this.getUserById(user_id)
    }
}

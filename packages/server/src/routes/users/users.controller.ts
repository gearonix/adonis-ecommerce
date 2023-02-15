import {Body, Controller, Post, UseGuards} from '@nestjs/common'
import {UsersService} from './users.service'
import {AuthGuard} from '@app/routes/auth/auth.guard'
import {EditProfileForm} from "./dto/editProfileDTO";
import {ObjectOptional} from "@app/types/helpers";

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Post('/change_profile')
    changeProfile(@Body() body: ObjectOptional<EditProfileForm>) {
        return this.usersService.changeProfile(body)
    }
}

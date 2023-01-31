import {Controller, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {AuthGuard} from "@app/routes/auth/auth.guard";

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
    constructor(private usersService: UsersService) {
    }

}

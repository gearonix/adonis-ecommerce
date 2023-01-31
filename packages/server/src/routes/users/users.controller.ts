import {Controller, Get, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {AuthGuard} from "@app/routes/auth/auth.guard";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @UseGuards(AuthGuard)
    @Get()
    async getUsers() {
        return ';)'
    }
}

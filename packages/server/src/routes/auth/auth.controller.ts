import {Body, Controller, Get, Headers, HttpException, HttpStatus, Post, Res} from '@nestjs/common';
import {AuthService} from "@app/routes/auth";
import {Response} from "express";
import {UserDTO, UserLoginDTO} from '../users/dto';
import {Exceptions} from "@app/lib";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/login')
    async login(@Body() user: UserLoginDTO, @Res({passthrough: true}) res: Response) {
        const tokenData = await this.authService.login(user)
        res.cookie('AUTH_TOKEN', tokenData.token)
        return tokenData
    }

    @Post('/registration')
    async registration(@Body() user: UserDTO, @Res({passthrough: true}) res: Response) {
        const tokenData = await this.authService.registration(user)
        res.cookie('AUTH_TOKEN', tokenData.token)
        return tokenData
    }

    @Get('/get/token')
    async AuthByCookie() {
        return this.authService.authByCookie()
    }

    @Get('/get/me')
    GetUserData(@Headers() headers) {
        const token = headers?.authorization?.split(' ')[1]
        if (!token) {
            throw new HttpException(Exceptions.NO_TOKEN, HttpStatus.BAD_REQUEST)
        }
        return this.authService.getMe(token)
    }
}

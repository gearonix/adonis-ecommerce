import {Body, Controller, Delete, Get, Headers, HttpException, HttpStatus, Post, Res,} from '@nestjs/common';
import {AuthService} from "@app/routes/auth";
import {Response} from "express";
import {RegisterUserDTO, UserLoginDTO} from '../users/dto';
import {Exceptions} from "@app/lib";
import {GoogleDTO} from '../users/dto/dto';

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
    async registration(@Body() user: RegisterUserDTO, @Res({passthrough: true}) res: Response) {
        const tokenData = await this.authService.registration(user)
        res.cookie('AUTH_TOKEN', tokenData.token)
        return tokenData
    }

    @Get('/get/token')
    async AuthByCookie() {
        return this.authService.authByCookie()
    }

    @Get('/get/me')
    async GetUserData(@Headers() headers) {
        const token = headers?.authorization?.split(' ')[1]
        if (!token) {
            throw new HttpException(Exceptions.NO_TOKEN, HttpStatus.NO_CONTENT)
        }
        const data = await this.authService.getMe(token)
        return data
    }

    @Delete('/delete/token')
    cookieClear(@Res({passthrough: true}) res: Response) {
        res.clearCookie('AUTH_TOKEN')
        res.end()
    }

    @Post('/registration/google')
    async registrationByGoogle(@Body() {jwt, role}: GoogleDTO, @Res({passthrough: true}) res: Response) {
        const tokenData = await this.authService.signupWithGoogle({jwt, role})
        res.cookie('AUTH_TOKEN', tokenData.token)
        return tokenData
    }

    @Post('/login/google')
    async loginByGoogle(@Body() {jwt}: GoogleDTO, @Res({passthrough: true}) res: Response) {
        const tokenData = await this.authService.loginWithGoogle(jwt)
        res.cookie('AUTH_TOKEN', tokenData.token)
        return tokenData
    }
}

import {Body, Controller, Delete, Get, Headers, HttpException, HttpStatus, Post, Res} from '@nestjs/common'
import {AuthService} from '@app/routes/auth'
import {Response} from 'express'
import {ServerExceptions} from '@app/lib'
import {GoogleDTO} from '../users/dto/googleDTO'
import {RegisterUserDTO, UserLoginDTO} from "@app/routes/users";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('/login')
  async login(@Body() user: UserLoginDTO, @Res({passthrough: true}) res: Response) {
    const tokenData = await this.authService.login(user)
    return this.authService.returnWithAuthCookie(tokenData, res)
  }

  @Post('/registration')
  async registration(@Body() user: RegisterUserDTO, @Res({passthrough: true}) res: Response) {
    const tokenData = await this.authService.registration(user)
    return this.authService.returnWithAuthCookie(tokenData, res)
  }

  @Get('/get/token')
  async AuthByCookie() {
    return this.authService.authByCookie()
  }

  @Get('/get/me')
  async GetUserData(@Headers() headers) {
    const token: string = headers?.authorization?.split(' ')[1]
    if (!token) {
      throw new HttpException(ServerExceptions.NO_TOKEN, HttpStatus.NO_CONTENT)
    }
    return await this.authService.getMe(token)
  }

  @Delete('/delete/token')
  cookieClear(@Res({passthrough: true}) res: Response) {
    res.clearCookie('AUTH_TOKEN')
    res.end()
  }

  @Post('/registration/google')
  async registrationByGoogle(@Body() {jwt, role}: GoogleDTO, @Res({passthrough: true}) res: Response) {
    const tokenData = await this.authService.signupWithGoogle({jwt, role})
    return this.authService.returnWithAuthCookie(tokenData, res)
  }

  @Post('/login/google')
  async loginByGoogle(@Body() request: GoogleDTO, @Res({passthrough: true}) res: Response) {
    console.log(request)
    const tokenData = await this.authService.loginWithGoogle(request.jwt)
    return this.authService.returnWithAuthCookie(tokenData, res)
  }
}

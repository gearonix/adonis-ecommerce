import {Body, Controller, Delete, Get, Post} from '@nestjs/common'
import {AuthService} from '@app/routes/auth'
import {GoogleDTO, RegisterUserDTO, UserLoginDTO} from '@app/routes/users'
import {RequestContext} from "nestjs-request-context";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

    @Post('/login')
    async login(@Body() user: UserLoginDTO) {
        const tokenData = await this.authService.login(user)
        return this.authService.returnWithAuthCookie(tokenData)
    }

    @Post('/registration')
    async registration(@Body() user: RegisterUserDTO) {
        const tokenData = await this.authService.registration(user)
        return this.authService.returnWithAuthCookie(tokenData)
    }

  @Get('/get/token')
  async AuthByCookie() {
    return this.authService.authByCookie()
  }

    @Get('/get/me')
    async GetUserData() {
        return await this.authService.getMe()
    }

    @Delete('/delete/token')
    cookieClear() {
        const res = RequestContext.currentContext.res
        res.clearCookie('AUTH_TOKEN')
        res.end()
    }

    @Post('/registration/google')
    async registrationByGoogle(@Body() {jwt, role}: GoogleDTO) {
        const tokenData = await this.authService.signupWithGoogle({jwt, role})
        return this.authService.returnWithAuthCookie(tokenData)
    }

    @Post('/login/google')
    async loginByGoogle(@Body() request: GoogleDTO) {
        const tokenData = await this.authService.loginWithGoogle(request.jwt)
        return this.authService.returnWithAuthCookie(tokenData)
    }
}

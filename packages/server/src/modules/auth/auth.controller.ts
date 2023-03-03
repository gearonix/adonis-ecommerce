import { Body, Controller, Delete, Get, Post } from '@nestjs/common'
import { AuthService } from '@app/modules/auth'
import { GoogleDTO, RegisterUserDTO, UserLoginDTO } from '@app/modules/users'
import { RequestContext } from 'nestjs-request-context'
import { GoogleService } from '@app/modules/auth/services/google.service'
import { TokenService } from '@app/modules/auth/services/token.service'
import { getResponse } from '@app/lib/helpers'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,
              private googleService: GoogleService,
              private tokenService: TokenService) {}

  @Post('/login')
  async login(@Body() user: UserLoginDTO) {
    const tokenData = await this.authService.login(user)
    return this.tokenService.setAuthCookie(tokenData)
  }

  @Post('/registration')
  async registration(@Body() user: RegisterUserDTO) {
    const tokenData = await this.authService.registration(user)
    return this.tokenService.setAuthCookie(tokenData)
  }


  @Get('/get/me')
  async GetUserData() {
    return this.tokenService.getUser()
  }

  @Delete('/delete/token')
  cookieClear() {
    const res = getResponse(RequestContext)
    res.clearCookie('AUTH_TOKEN')
    res.end()
  }

  @Post('/registration/google')
  async registrationByGoogle(@Body() { jwt, role }: GoogleDTO) {
    const tokenData = await this.googleService.signupWithGoogle({ jwt, role })
    return this.tokenService.setAuthCookie(tokenData)
  }

  @Post('/login/google')
  async loginByGoogle(@Body() request: GoogleDTO) {
    const tokenData = await this.googleService.loginWithGoogle(request.jwt)
    return this.tokenService.setAuthCookie(tokenData)
  }
}

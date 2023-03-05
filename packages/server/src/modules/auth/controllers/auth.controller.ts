import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from '@app/modules/auth'
import { RegisterUserDTO, UserLoginDTO } from '@app/modules/users'
import { TokenService } from '@app/modules/auth/services/token.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,
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
}

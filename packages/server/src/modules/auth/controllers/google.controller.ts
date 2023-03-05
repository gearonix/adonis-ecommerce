import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from '@app/modules/auth'
import { GoogleDTO } from '@app/modules/users'
import { GoogleService } from '@app/modules/auth/services/google.service'
import { TokenService } from '@app/modules/auth/services/token.service'

@Controller('auth/google')
export class GoogleController {
  constructor(private googleService: GoogleService,
                private tokenService: TokenService) {}

    @Post('/registration')
  async registrationByGoogle(@Body() { jwt, role }: GoogleDTO) {
    const tokenData = await this.googleService.signupWithGoogle({ jwt, role })
    return this.tokenService.setAuthCookie(tokenData)
  }

    @Post('/login')
    async loginByGoogle(@Body() request: GoogleDTO) {
      const tokenData = await this.googleService.loginWithGoogle(request.jwt)
      return this.tokenService.setAuthCookie(tokenData)
    }
}

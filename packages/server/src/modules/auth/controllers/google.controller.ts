import { Body, Controller, Post } from '@nestjs/common'
import { GoogleDTO } from '@app/modules/users'
import { GoogleService } from '@app/modules/auth/services/google.service'

@Controller('auth/google')
export class GoogleController {
  constructor(private googleService: GoogleService) {}

  @Post('/registration')
  async registrationByGoogle(@Body() { jwt, role }: GoogleDTO) {
    return this.googleService.signupWithGoogle({ jwt, role })
  }

  @Post('/login')
  async loginByGoogle(@Body() request: GoogleDTO) {
    return this.googleService.loginWithGoogle(request.jwt)
  }
}

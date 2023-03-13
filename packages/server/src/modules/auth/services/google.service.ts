import { forwardRef, Inject } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { GoogleRegisterDTO, UsersService } from '@app/modules/users'
import { GoogleDTO } from '../../users'
import { GoogleData } from '@app/modules/users/dto/googleDTO'
import { ReturnToken } from '@app/modules/auth/types/returnTypes'
import { AuthService } from '@app/modules/auth'
import { TokenService } from '@app/modules/auth/services/token.service'
import { generateId } from '@app/lib/helpers'
import { Roles } from '@app/types/global'

export class GoogleService {
  constructor(
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService,
        private jwtService: JwtService,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        private tokenService: TokenService
  ) {}

  async signupWithGoogle({ jwt, role }: GoogleDTO): Promise<ReturnToken> {
    const googleData = await this.jwtService.decode(jwt)
    const user = this.convertGoogleData(
            googleData as GoogleData,
            role
    )
    return this.authService.registration(user)
  }

  private convertGoogleData(googleData: GoogleData, role: Roles): GoogleRegisterDTO {
    // eslint-disable-next-line camelcase
    const { given_name, sub, family_name, email, picture } = googleData
    return {
      email,
      // eslint-disable-next-line camelcase
      firstName: given_name,
      // eslint-disable-next-line camelcase
      lastName: family_name,
      google_sub: sub,
      password: `google_generated__${generateId()}`,
      role,
      avatar: picture
    }
  }

  async loginWithGoogle(jwt: string): Promise<ReturnToken> {
    const googleData = await this.jwtService.decode(jwt)
    const user = await this.usersService.getIdByGoogleSub(googleData.sub)
    if (!user) {
      return this.signupWithGoogle({ jwt, role: Roles.CUSTOMER })
    }
    return this.tokenService.generateToken(user.userId)
  }
}

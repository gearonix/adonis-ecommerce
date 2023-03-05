import { Controller, Delete, Get } from '@nestjs/common'
import { RequestContext } from 'nestjs-request-context'
import { TokenService } from '@app/modules/auth/services/token.service'
import { getResponse } from '@app/lib/helpers'

@Controller('auth/token')
export class TokenController {
  constructor(private tokenService: TokenService) {}
    @Get('/me')
  async GetUserData() {
    return this.tokenService.getUser()
  }

    @Delete('/remove')
    cookieClear() {
      const res = getResponse(RequestContext)
      res.clearCookie('AUTH_TOKEN')
      res.end()
    }
}

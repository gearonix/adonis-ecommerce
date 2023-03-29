import { forwardRef, HttpException, HttpStatus, Inject } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '@app/modules/users'
import { ReturnToken } from '@app/modules/auth/types/returnTypes'
import { UsersEntity } from '@app/entities'
import { RequestContext } from 'nestjs-request-context'
import { getRequest } from '@app/lib/helpers'
import { ServerExceptions } from '@app/types/exceptions'

export class TokenService {
  constructor(
      @Inject(forwardRef(() => UsersService))
      private usersService: UsersService,
      private jwtService: JwtService
  ) {
  }

  async generateToken(userId: number): Promise<ReturnToken> {
    const token = this.jwtService.sign(
        { payload: { userId } }
    )
    return { token }
  }

  async getUser(): Promise<UsersEntity & {isMe: boolean}> {
    try {
      const userId = await this.getUserIdByHeaders()
      return await this.usersService.getUserById(userId)
    } catch (e) {
      throw new HttpException(
          ServerExceptions.INCORRECT_TOKEN,
          HttpStatus.NO_CONTENT
      )
    }
  }

  async getUserIdByHeaders(): Promise<number> {
    const req = getRequest(RequestContext)
    const authorization = req.headers.authorization
    const bearer = authorization.split(' ')[0]
    const token = authorization.split(' ')[1]
    if (!token || bearer !== 'Bearer') {
      throw new HttpException(
          ServerExceptions.INCORRECT_TOKEN,
          HttpStatus.NO_CONTENT
      )
    }
    try {
      return this.verifyToken(token)
    } catch (e) {
      throw new HttpException(
          ServerExceptions.INCORRECT_TOKEN,
          HttpStatus.NO_CONTENT
      )
    }
  }

  async verifyToken(token: string) {
    const tokenData = await this.jwtService.verify(token)
    const userId: number = tokenData.payload.userId

    if (!userId) {
      throw new HttpException(
          ServerExceptions.NO_TOKEN,
          HttpStatus.NO_CONTENT
      )
    }
    return userId
  }
}

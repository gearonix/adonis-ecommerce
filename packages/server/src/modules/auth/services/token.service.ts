import { forwardRef, HttpException, HttpStatus, Inject } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '@app/modules/users'
import { ReturnToken } from '@app/modules/auth/types/returnTypes'
import { UsersEntity } from '@app/entities'
import { RequestContext } from 'nestjs-request-context'
import { getRequest, getResponse } from '@app/lib/helpers'
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
        { payload: { userId } },
        { expiresIn: '1h' }
    )
    return { token }
  }

  async getUser(): Promise<UsersEntity & {isMe: boolean}> {
    try {
      const userId = await this.getUserIdByCookie()
      return await this.usersService.getUserById(userId)
    } catch (e) {
      throw new HttpException(
          ServerExceptions.INCORRECT_TOKEN,
          HttpStatus.NO_CONTENT
      )
    }
  }

  async getUserIdByCookie(): Promise<number> {
    const req = getRequest(RequestContext)
    const token = req.cookies.AUTH_TOKEN
    if (!token) {
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

  async setAuthCookie(tokenData: ReturnToken): Promise<ReturnToken> {
    const res = getResponse(RequestContext)
    res.cookie('AUTH_TOKEN', tokenData.token)
    return tokenData
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

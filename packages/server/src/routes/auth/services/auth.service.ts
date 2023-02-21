import {forwardRef, HttpException, HttpStatus, Inject} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {UsersService} from '@routes/users'
import * as bcrypt from 'bcryptjs'
import {ServerExceptions} from '@app/lib'
import {RegisterUserDTO, UserLoginDTO} from '../../users'
import {ReturnToken} from '@routes/auth/types/returnTypes'
import {RequestContext} from 'nestjs-request-context'
import {TokenService} from '@routes/auth/services/token.service'

export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async login(userDto: UserLoginDTO): Promise<ReturnToken> {
    const userId = await this.validateUser(userDto)
    return this.tokenService.generateToken(userId)
  }

  async registration(user: RegisterUserDTO): Promise<ReturnToken> {
    const candidate = await this.usersService.getIdAndPasswordByEmail(
        user.email,
    )

    if (candidate) {
      throw new HttpException(
          ServerExceptions.USER_ALREADY_EXISTS,
          HttpStatus.ACCEPTED,
      )
    }
    const hashPassword = await bcrypt.hash(user.password, 5)
    const {userId} = await this.usersService.createUser({
      ...user,
      password: hashPassword,
    })

    return this.tokenService.generateToken(userId)
  }

  private async validateUser(userDto: UserLoginDTO) {
    const user = await this.usersService.getIdAndPasswordByEmail(userDto.email)

    if (!user) {
      throw new HttpException(
          ServerExceptions.USER_NOT_EXIST,
          HttpStatus.NO_CONTENT,
      )
    }

    const {password, userId} = user

    const passwordEquals = await bcrypt.compare(userDto.password, password)

    if (passwordEquals) {
      return userId
    }

    throw new HttpException(
        ServerExceptions.INCORRECT_PASSWORD,
        HttpStatus.ACCEPTED,
    )
  }

  async getUserIdByPayload(): Promise<number> {
    const req = RequestContext.currentContext.req
    console.log(req.user)
    return req.user.payload.userId
  }
}

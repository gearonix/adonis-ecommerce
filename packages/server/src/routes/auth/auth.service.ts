import {HttpException, HttpStatus, Inject, Injectable, Res, Scope} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {UsersService} from '@app/routes/users'
import * as bcrypt from 'bcryptjs'
import {Roles, ServerExceptions} from '@app/lib'
import {GoogleDTO, RegisterUserDTO, UserLoginDTO} from '../users'
import {Request, Response} from 'express'
import {REQUEST} from '@nestjs/core'
import {GoogleData} from "@app/routes/users/dto/googleDTO";
import {ReturnToken} from "@app/routes/auth/types/returnTypes";
import {UsersModel} from "@app/models";

@Injectable({scope: Scope.REQUEST})
export class AuthService {
  constructor(
      @Inject(REQUEST) private request: Request,
      private usersService: UsersService,
      private jwtService: JwtService,
  ) {
  }

  async login(userDto: UserLoginDTO): Promise<ReturnToken> {
    const user_id = await this.validateUser(userDto)
    return this.generateToken(user_id)
  }

  async registration(user: RegisterUserDTO): Promise<ReturnToken> {
    const candidate = await this.usersService.getIdAndPasswordByEmail(user.email)

    if (candidate) {
      throw new HttpException(ServerExceptions.USER_ALREADY_EXISTS, HttpStatus.ACCEPTED)
    }
    const hashPassword = await bcrypt.hash(user.password, 5)
    const {user_id} = await this.usersService.createUser({...user, password: hashPassword})

    return this.generateToken(user_id)
  }

  async signupWithGoogle({jwt, role}: GoogleDTO): Promise<ReturnToken> {
    const googleData = await this.jwtService.decode(jwt)
    const user = this.usersService.convertGoogleData(googleData as GoogleData, role)
    return await this.registration(user)
  }

  async loginWithGoogle(jwt: string): Promise<ReturnToken> {
    const googleData = await this.jwtService.decode(jwt)
    const user = await this.usersService.getIdByGoogleSub(googleData.sub)
    if (!user) {
      return await this.signupWithGoogle({jwt, role: Roles.CUSTOMER})
    }
    return await this.generateToken(user.user_id)
  }

  async authByCookie() {
    const AUTH_TOKEN = this.request?.cookies?.AUTH_TOKEN
    if (!AUTH_TOKEN) {
      throw new HttpException(ServerExceptions.NO_COOKIE, HttpStatus.NO_CONTENT)
    }
    return {token: AUTH_TOKEN}
  }

  async getMe(token: string): Promise<UsersModel> {
    try {
      const tokenData = await this.jwtService.verify(token)
      if (!tokenData.payload.user_id) {
        throw new HttpException(ServerExceptions.NO_TOKEN, HttpStatus.NO_CONTENT)
      }
      return await this.usersService.getUserById(tokenData.payload.user_id)
    } catch (e) {
      throw new HttpException(ServerExceptions.INCORRECT_TOKEN, HttpStatus.NO_CONTENT)
    }
  }

  async returnWithAuthCookie(tokenData: ReturnToken, @Res() res: Response): Promise<ReturnToken> {
    res.cookie('AUTH_TOKEN', tokenData.token)
    return tokenData
  }

  private async generateToken(user_id: number): Promise<ReturnToken> {
    const token = this.jwtService.sign({payload: {user_id}}, {expiresIn: '1h'})
    return {token}
  }

  private async validateUser(userDto: UserLoginDTO) {
    const user = await this.usersService.getIdAndPasswordByEmail(userDto.email)

    if (!user) {
      throw new HttpException(ServerExceptions.USER_NOT_EXIST, HttpStatus.NO_CONTENT)
    }

    const {password, user_id} = user

    const passwordEquals = await bcrypt.compare(userDto.password, password)

    if (passwordEquals) {
      return user_id
    }

    throw new HttpException(ServerExceptions.INCORRECT_PASSWORD, HttpStatus.ACCEPTED)
  }
}

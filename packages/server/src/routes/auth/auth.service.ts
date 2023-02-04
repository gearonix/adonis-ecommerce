import {HttpException, HttpStatus, Inject, Injectable, Scope} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {UsersService} from '@app/routes/users'
import * as bcrypt from 'bcryptjs'
import {Exceptions, Roles} from '@app/lib'
import {RegisterUserDTO, UserLoginDTO} from '../users/dto'
import {Request} from 'express'
import {REQUEST} from '@nestjs/core'
import {GoogleData} from '@app/types/others'
import {GoogleDTO} from '@app/routes/users/dto/dto'

@Injectable({scope: Scope.REQUEST})
export class AuthService {
    constructor(
        @Inject(REQUEST) private request: Request,
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {
    }

    async login(userDto: UserLoginDTO) {
        const user_id = await this.validateUser(userDto)
        return this.generateToken(user_id)
    }

    async registration(user: RegisterUserDTO) {
        const candidate = await this.usersService.getIdAndPasswordByEmail(user.email)

        if (candidate) {
            throw new HttpException(Exceptions.USER_ALREADY_EXISTS, HttpStatus.ACCEPTED)
        }
        const hashPassword = await bcrypt.hash(user.password, 5)
        const {user_id} = await this.usersService.createUser({...user, password: hashPassword})

        return this.generateToken(user_id)
    }

    async signupWithGoogle({jwt, role}: GoogleDTO) {
        const googleData = await this.jwtService.decode(jwt)
        const user = this.usersService.convertGoogleData(googleData as GoogleData, role)
        return await this.registration(user)
    }

    async loginWithGoogle(jwt: string) {
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
            throw new HttpException(Exceptions.NO_COOKIE, HttpStatus.NO_CONTENT)
        }
        return {token: AUTH_TOKEN}
    }

    async getMe(token: string) {
        try {
            const tokenData = await this.jwtService.verify(token)
            if (!tokenData.payload.user_id) {
                throw new HttpException(Exceptions.NO_TOKEN, HttpStatus.NO_CONTENT)
            }
            return await this.usersService.getUserById(tokenData.payload.user_id)
        } catch (e) {
            throw new HttpException(Exceptions.INCORRECT_TOKEN, HttpStatus.NO_CONTENT)
        }
    }

    private async generateToken(user_id: number) {
        const token = this.jwtService.sign({payload: {user_id}}, {expiresIn: '1h'})
        return {token}
    }

    private async validateUser(userDto: UserLoginDTO) {
        const user = await this.usersService.getIdAndPasswordByEmail(userDto.email)

        if (!user) {
            throw new HttpException(Exceptions.USER_NOT_EXIST, HttpStatus.NO_CONTENT)
        }

        const {password, user_id} = user

        const passwordEquals = await bcrypt.compare(userDto.password, password)

        if (passwordEquals) {
            return user_id
        }

        throw new HttpException(Exceptions.INCORRECT_PASSWORD, HttpStatus.ACCEPTED)
    }
}

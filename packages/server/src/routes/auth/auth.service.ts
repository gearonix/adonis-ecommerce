import {HttpException, HttpStatus, Inject, Injectable, Scope, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from "@app/routes/users";
import * as bcrypt from 'bcryptjs'
import {Exceptions} from '@app/lib';
import {UserDTO} from '../users/dto';
import {Request} from "express";
import {REQUEST} from '@nestjs/core';


@Injectable({scope: Scope.REQUEST})
export class AuthService {
    constructor(
        @Inject(REQUEST) private request: Request,
        private usersService: UsersService,
        private jwtService: JwtService
    ) {
    }

    async login(userDto: UserDTO) {
        const user_id = await this.validateUser(userDto)
        return this.generateToken(user_id)
    }

    async registration(user: UserDTO) {
        const candidate = await this.usersService.getIdAndPasswordByEmail(user.email)

        if (candidate) {
            throw new HttpException(Exceptions.USER_ALREADY_EXISTS, HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(user.password, 5)
        const {user_id} = await this.usersService.createUser({...user, password: hashPassword})

        return this.generateToken(user_id)
    }

    async authByCookie() {
        const {AUTH_TOKEN} = this.request.cookies
        if (!AUTH_TOKEN) {
            throw new HttpException(Exceptions.NO_COOKIE, HttpStatus.BAD_REQUEST)
        }
        return {token: AUTH_TOKEN}
    }

    async getMe(token: string) {
        try {
            const tokenData = await this.jwtService.verify(token)
            return await this.usersService.getUserById(tokenData.user_id)
        } catch (e) {
            throw new HttpException(Exceptions.INCORRECT_TOKEN, HttpStatus.BAD_REQUEST)
        }
    }

    private async generateToken(user_id: number) {
        return {
            token: this.jwtService.sign({payload: {user_id}})
        }
    }

    private async validateUser(userDto: UserDTO) {
        const user = await this.usersService.getIdAndPasswordByEmail(userDto.email)


        if (!user) {
            throw new HttpException(Exceptions.USER_NOT_EXIST, HttpStatus.BAD_REQUEST)
        }

        const {password, user_id} = user

        const passwordEquals = await bcrypt.compare(userDto.password, password)

        if (passwordEquals) {
            return user_id;
        }

        throw new UnauthorizedException({message: Exceptions.INCORRECT_PASSWORD})
    }


}

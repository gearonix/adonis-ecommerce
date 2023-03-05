import { forwardRef, Module } from '@nestjs/common'
import { AuthController, GoogleController, TokenController } from './controllers'
import { AuthService, GoogleService, TokenService } from '@modules/auth/services'
import { JwtModule } from '@nestjs/jwt'
import { appConfig } from '@app/config'
import { UsersModule } from '../users'
import { RequestContextModule } from 'nestjs-request-context'

@Module({
  controllers: [AuthController, GoogleController, TokenController],
  providers: [AuthService, GoogleService, TokenService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || appConfig.privateKey,
      signOptions: {
        expiresIn: '24h'
      }
    }),
    RequestContextModule
  ],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}

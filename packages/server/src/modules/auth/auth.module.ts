import { forwardRef, Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './services/auth.service'
import { JwtModule } from '@nestjs/jwt'
import { appConfig } from '@app/config'
import { UsersModule } from '../users'
import { RequestContextModule } from 'nestjs-request-context'
import { GoogleService } from '@app/modules/auth/services/google.service'
import { TokenService } from '@app/modules/auth/services/token.service'

@Module({
  controllers: [AuthController],
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

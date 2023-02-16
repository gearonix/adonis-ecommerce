import {forwardRef, Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {JwtModule} from '@nestjs/jwt';
import {appConfig} from '@app/config';
import {UsersModule} from '../users';
import {RequestContextModule} from 'nestjs-request-context';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || appConfig.privateKey,
      signOptions: {
        expiresIn: "1h",
      },
    }),
    RequestContextModule,
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}

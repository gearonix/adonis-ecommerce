import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm';
import {buildDBConfig} from './config';
import {AuthModule, UsersModule} from './routes'
import {UsersModel} from "@app/models";
import {APP_GUARD} from '@nestjs/core';
import {AuthGuard} from './routes/auth/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      cache: true,
    }),
    TypeOrmModule.forRoot(buildDBConfig([UsersModel])),

    AuthModule,
    UsersModule
  ],

  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
  ],
})
export class AppModule {}

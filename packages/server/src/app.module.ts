import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {buildDBConfig} from './config';
import {UsersModel} from '@app/models';
import {AuthModule} from './routes/auth';
import {UsersModule} from './routes/users';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      cache: true,
    }),
    TypeOrmModule.forRoot(buildDBConfig([UsersModel])),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
      serveRoot: '/static'
    }),
    AuthModule,
    UsersModule,

  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

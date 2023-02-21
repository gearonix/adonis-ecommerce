import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import {appConfig, buildDBConfig} from './config'
import {ProductsEntity, UsersEntity} from '@app/entities'
import {AuthModule} from './routes/auth'
import {UsersModule} from './routes/users'
import {ServeStaticModule} from '@nestjs/serve-static'
import {resolve} from 'path'
import {ProductsModule} from '@routes/products/products.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      cache: true,
    }),
    TypeOrmModule.forRoot(buildDBConfig([UsersEntity, ProductsEntity])),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
      serveRoot: `/${appConfig.globalPrefix}/static`,
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

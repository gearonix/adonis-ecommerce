import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { appConfig, buildDBConfig } from './config'
import { AuthModule } from '@app/modules/auth'
import { UsersModule } from '@app/modules/users'
import { ServeStaticModule } from '@nestjs/serve-static'
import { resolve } from 'path'
import { ProductsModule } from '@app/modules/products'
import { CommentsModule } from '@app/modules/comments'
import { RequestContextModule } from 'nestjs-request-context'
import { PostsModule } from '@app/modules/posts/posts.module'
import { MessengerModule } from '@modules/messenger'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      cache: true
    }),
    TypeOrmModule.forRoot(buildDBConfig()),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
      serveRoot: `/${appConfig.globalPrefix}/static`
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
    CommentsModule,
    PostsModule,
    MessengerModule,
    RequestContextModule
  ],

  controllers: [],
  providers: []
})
export class AppModule {}

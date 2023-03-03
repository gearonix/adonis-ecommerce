import { Module } from '@nestjs/common'
import { PostsController } from './posts.controller'
import { PostsService } from './posts.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostsEntity } from '@app/entities'
import { RequestContextModule } from 'nestjs-request-context'
import { AuthModule } from '@app/modules/auth'
import { FilesModule } from '../files/files.module'

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    TypeOrmModule.forFeature([PostsEntity]),
    RequestContextModule,
    AuthModule,
    FilesModule
  ],
  exports: [
    PostsService
  ]
})
export class PostsModule {}

import { Module } from '@nestjs/common'
import { CommentsController } from './comments.controller'
import { CommentsService } from './comments.service'
import { AuthModule } from '@app/modules/auth'
import { ProductCommentsEntity, ProductsEntity } from '@app/entities'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([ProductCommentsEntity, ProductsEntity])
  ],
  exports: [
    CommentsService
  ]
})
export class CommentsModule {}

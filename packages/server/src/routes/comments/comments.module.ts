import {Module} from '@nestjs/common'
import {CommentsController} from './comments.controller'
import {CommentsService} from './comments.service'
import {AuthModule} from '@routes/auth'
import {RequestContextModule} from 'nestjs-request-context'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductCommentsEntity, ProductsEntity} from '@app/entities'

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    AuthModule,
    RequestContextModule,
    TypeOrmModule.forFeature([ProductCommentsEntity, ProductsEntity]),
  ],
  exports: [
    CommentsService,
  ],
})
export class CommentsModule {}

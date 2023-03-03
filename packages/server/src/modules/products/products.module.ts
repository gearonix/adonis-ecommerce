import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsService } from './services/products.service'
import { CreateProductService } from './services/createProduct.service'
import { AuthModule } from '@app/modules/auth'
import { UsersModule } from '@app/modules/users'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsEntity, SavedEntity } from '@app/entities'
import { RequestContextModule } from 'nestjs-request-context'
import { SavedService } from './services/saved.service'
import { CommentsModule } from '@app/modules/comments'
import { FilesModule } from '../files/files.module'

@Module({
  controllers: [ProductsController],
  providers: [CreateProductService, ProductsService, SavedService],
  imports: [
    TypeOrmModule.forFeature([ProductsEntity, SavedEntity]),
    AuthModule,
    UsersModule,
    RequestContextModule,
    FilesModule,
    CommentsModule
  ]
})
export class ProductsModule {}

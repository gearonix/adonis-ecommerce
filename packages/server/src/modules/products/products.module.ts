import { Module } from '@nestjs/common'
import { ProductsController, CreateProductController, SavedProductsController } from './controllers'
import { ProductsService, CreateProductService, SavedService } from '@modules/products/services'
import { AuthModule } from '@app/modules/auth'
import { UsersModule } from '@app/modules/users'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsEntity, SavedEntity } from '@app/entities'
import { RequestContextModule } from 'nestjs-request-context'
import { CommentsModule } from '@app/modules/comments'
import { FilesModule } from '@modules/files'

@Module({
  controllers: [ProductsController, CreateProductController, SavedProductsController],
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

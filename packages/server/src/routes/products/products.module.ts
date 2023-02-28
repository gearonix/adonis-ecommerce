import {Module} from '@nestjs/common'
import {ProductsController} from './products.controller'
import {ProductsService} from './services/products.service'
import {CreateProductService} from './services/createProduct.service'
import {AuthModule} from '@routes/auth'
import {UsersModule} from '@routes/users'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductsEntity, SavedEntity} from '@app/entities'
import {RequestContextModule} from 'nestjs-request-context'
import {FilesModule} from '@modules/files'
import {SavedService} from './services/saved.service'

@Module({
  controllers: [ProductsController],
  providers: [CreateProductService, ProductsService, SavedService],
  imports: [
    TypeOrmModule.forFeature([ProductsEntity, SavedEntity]),
    AuthModule,
    UsersModule,
    RequestContextModule,
    FilesModule,
  ],
})
export class ProductsModule {}

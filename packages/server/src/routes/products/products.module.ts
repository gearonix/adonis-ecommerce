import {Module} from '@nestjs/common'
import {ProductsController} from './products.controller'
import {ProductsService} from './products.service'
import {AuthModule} from '@routes/auth'
import {UsersModule} from '@routes/users'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductsEntity} from '@app/entities'
import {RequestContextModule} from 'nestjs-request-context'
import {FilesModule} from '@modules/files'

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([ProductsEntity]),
    AuthModule,
    UsersModule,
    RequestContextModule,
    FilesModule,
  ],
})
export class ProductsModule {}

import {Module} from '@nestjs/common'
import {ProductsController} from './products.controller'
import {ProductsService} from './products.service'
import {AuthModule} from "@routes/auth";
import {UsersModule} from "@routes/users";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductsEntity} from "@app/entities";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
      TypeOrmModule.forFeature([ProductsEntity]),
      AuthModule,
      UsersModule
  ]
})
export class ProductsModule {}

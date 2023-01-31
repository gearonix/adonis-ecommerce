import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModel} from "@app/models";


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([UsersModel])
  ],
  exports: [UsersService]

})
export class UsersModule {
}

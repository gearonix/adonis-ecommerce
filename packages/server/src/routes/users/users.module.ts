import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModel} from "@app/models";
import {AuthModule} from "@app/routes/auth";


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([UsersModel]),
    forwardRef(() => AuthModule)
  ],
  exports: [UsersService]

})
export class UsersModule {
}

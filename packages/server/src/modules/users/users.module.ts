import { forwardRef, Module } from '@nestjs/common'
import { UsersController, ChangeProfileController } from './controllers'
import { UsersService, ProfileService } from '@modules/users/services'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersEntity } from '@app/entities'
import { AuthModule } from '@app/modules/auth'
import { RequestContextModule } from 'nestjs-request-context'
import { FilesModule } from '@app/modules/files'

@Module({
  controllers: [UsersController, ChangeProfileController],
  providers: [UsersService, ProfileService],
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    forwardRef(() => AuthModule),
    RequestContextModule,
    FilesModule
  ],
  exports: [UsersService]
})
export class UsersModule {}

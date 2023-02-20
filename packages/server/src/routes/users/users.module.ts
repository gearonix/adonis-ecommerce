import {forwardRef, Module} from '@nestjs/common'
import {UsersController} from './users.controller'
import {UsersService} from './services/users.service'
import {TypeOrmModule} from '@nestjs/typeorm'
import {UsersEntity} from '@app/entities'
import {AuthModule} from '@app/routes/auth'
import {RequestContextModule} from 'nestjs-request-context'
import {FilesModule} from '@app/modules/files'
import {ProfileService} from './services/profile.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService, ProfileService],
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    forwardRef(() => AuthModule),
    RequestContextModule,
    FilesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}

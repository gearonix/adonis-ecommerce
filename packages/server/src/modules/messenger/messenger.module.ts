import { forwardRef, Module } from '@nestjs/common'
import { ChatGateway } from './gateways/chatGateway/chat.gateway'
import { AuthModule } from '@modules/auth'
import { StatusGateway } from './gateways/statusGateway/status.gateway'
import { UserStatusService } from './services/user-status.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MessengerRoomsEntity, UserMessagesEntity } from '@app/entities'
import { MessengerController } from './messenger.controller'
import { FilesModule } from '@modules/files'
import { RoomsService } from './services/rooms.service'
import { MessagesService } from './services/messages.service'

@Module({
  providers: [ChatGateway, StatusGateway,
    UserStatusService, RoomsService, MessagesService],
  controllers: [MessengerController],
  imports: [
    TypeOrmModule.forFeature([MessengerRoomsEntity, UserMessagesEntity]),
    forwardRef(() => AuthModule),
    FilesModule
  ],
  exports: [
    UserStatusService,
    RoomsService,
    MessagesService
  ]
})
export class MessengerModule {}

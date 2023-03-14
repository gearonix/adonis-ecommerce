import { forwardRef, Module } from '@nestjs/common'
import { ChatGateway } from './gateways/chat/chat.gateway'
import { AuthModule } from '@modules/auth'
import { StatusGateway } from './gateways/status/status.gateway'
import { UserStatusService } from './services/user-status.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MessengerRoomsEntity, UserMessagesEntity } from '@app/entities'
import { MessengerRoomsService } from './services/messenger-rooms.service'
import { MessengerController } from './controllers'

@Module({
  providers: [ChatGateway, StatusGateway,
    UserStatusService, MessengerRoomsService],
  controllers: [MessengerController],
  imports: [
    TypeOrmModule.forFeature([MessengerRoomsEntity, UserMessagesEntity]),
    forwardRef(() => AuthModule)
  ],
  exports: [
    UserStatusService,
    MessengerRoomsService
  ]
})
export class MessengerModule {}

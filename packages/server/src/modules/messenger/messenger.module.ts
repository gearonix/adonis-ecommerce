import { Module } from '@nestjs/common'
import { ChatGateway } from './gateways/chat.gateway'
import { AuthModule } from '@modules/auth'
import { AuthGateway } from './gateways/auth.gateway'
import { OnlineUsersService } from './services/onlineUsers.service'

@Module({
  providers: [ChatGateway, AuthGateway, OnlineUsersService],
  imports: [
    AuthModule
  ]
})
export class MessengerModule {}

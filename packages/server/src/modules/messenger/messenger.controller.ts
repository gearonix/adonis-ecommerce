import { Body, Controller, forwardRef, Get, Inject, Param, Put } from '@nestjs/common'
import { RoomsService } from '@modules/messenger/index'
import { AuthService } from '@modules/auth'
import { MessagesService } from '@modules/messenger/services/messages.service'

@Controller('messenger')
export class MessengerController {
  constructor(
      @Inject(forwardRef(() => RoomsService))
      private roomsService: RoomsService,
      @Inject(forwardRef(() => MessagesService))
      private messagesService: MessagesService,
      @Inject(forwardRef(() => AuthService))
      private authService: AuthService
  ) {}
  @Put('/rooms')
  async getUserRooms(@Body('userId') userId: number) {
    return this.roomsService.getUserRooms(userId)
  }
  @Put(':id')
  async selectRoom(@Param('id') id: string, @Body('userId') userId: number) {
    return this.messagesService.selectRoom(Number(id), userId)
  }
}

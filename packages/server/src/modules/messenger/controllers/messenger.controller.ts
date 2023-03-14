import { Body, Controller, forwardRef, Get, Inject, Param, Put } from '@nestjs/common'
import { MessengerRoomsService } from '@modules/messenger'
import { AuthService } from '@modules/auth'

@Controller('messenger')
export class MessengerController {
  constructor(
      @Inject(forwardRef(() => MessengerRoomsService))
      private roomsService: MessengerRoomsService,
      @Inject(forwardRef(() => AuthService))
      private authService: AuthService
  ) {}
  @Put('/rooms')
  async getUserRooms(@Body('userId') userId: number) {
    return this.roomsService.getUserRooms(userId)
  }
  @Put(':id')
  async selectRoom(@Param('id') id: string, @Body('userId') userId: number) {
    return this.roomsService.selectRoom(Number(id), userId)
  }
}

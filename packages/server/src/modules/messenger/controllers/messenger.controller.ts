import { Controller, forwardRef, Get, Inject } from '@nestjs/common'
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

  @Get('/rooms')
  async getUserRooms() {
    const userId = await this.authService.getUserId()
    return this.roomsService.getUserRooms(userId)
  }
}

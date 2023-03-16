import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MessengerRoomsEntity } from '@app/entities'
import { Repository } from 'typeorm'
import { AuthService } from '@modules/auth'
import { ServerExceptions } from '@app/types/exceptions'

@Injectable()
export class RoomsService {
  constructor(
        @InjectRepository(MessengerRoomsEntity)
        private rooms: Repository<MessengerRoomsEntity>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService
  ) {}


  async startChat(starterId: number, invitedId: number): Promise<MessengerRoomsEntity> {
    const room = await this.getRoomByMembers(starterId, invitedId)

    if (!room) {
      return this.rooms.save({ starterId, invitedId })
    }

    return room
  }


  private async getRoomByMembers(starterId: number, invitedId: number) {
    return this.rooms.findOneBy([{ starterId, invitedId },
      { starterId: invitedId, invitedId: starterId }])
  }


  async getUserRooms(userId: number) {
    return this.rooms.find({
      where: [{ starterId: userId }, { invitedId: userId }],
      relations: {
        starterUser: true,
        invitedUser: true
      }
    })
  }

  async checkUserHasRoom(roomId: number, userId: number) {
    if (isNaN(roomId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }

    const rooms = await this.getUserRooms(userId)

    const ids = rooms.map(({ roomId }) => roomId)
    if (!ids.includes(roomId)) {
      throw new HttpException(ServerExceptions.GROUP_FORBIDDEN, HttpStatus.FORBIDDEN)
    }
  }

  async getOpponentId(roomId: number, userId: number) {
    const room = await this.rooms.findOneBy({ roomId })
    return userId === room.starterId ? room.invitedId : room.starterId
  }
}

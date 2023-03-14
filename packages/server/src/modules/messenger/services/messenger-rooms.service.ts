import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MessengerRoomsEntity, UserMessagesEntity } from '@app/entities'
import { Repository } from 'typeorm'
import { AuthService } from '@modules/auth'
import { ServerExceptions } from '@app/types/exceptions'
import { NewMessage } from '@modules/messenger/gateways/chat/requestTypes'

@Injectable()
export class MessengerRoomsService {
  constructor(
        @InjectRepository(MessengerRoomsEntity)
        private rooms: Repository<MessengerRoomsEntity>,
        @InjectRepository(UserMessagesEntity)
        private messages: Repository<UserMessagesEntity>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService
  ) {}

  async startChat(members: number[]): Promise<MessengerRoomsEntity> {
    const room = await this.getRoomByMembers(members)

    if (!room) {
      return this.rooms.save({ members })
    }

    return room
  }


  private async getRoomByMembers(members: number[]) {
    const [room] = await this.rooms.query(`SELECT * FROM messenger_rooms WHERE 
    json_contains(members, json_array(${members.join(', ')}))`)

    if (room) {
      return { ...room, members: JSON.parse(room.members) }
    }
  }


  async getUserRooms(userId: number) {
    return this.rooms.query(`SELECT * FROM messenger_rooms WHERE 
    json_contains(members, json_array(${userId}))`)
  }

  async selectRoom(roomId: number, userId: number) {
    await this.checkUserHasRoom(roomId, userId)

    return this.messages.find({
      where: { roomId }
    })
  }

  async saveMessage(message: NewMessage) {
    return this.messages.save(message)
  }

  private async checkUserHasRoom(roomId: number, userId: number) {
    if (isNaN(roomId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }

    const rooms = await this.getUserRooms(userId)

    const ids = rooms.map(({ roomId }) => roomId)
    if (!ids.includes(roomId)) {
      throw new HttpException(ServerExceptions.GROUP_FORBIDDEN, HttpStatus.FORBIDDEN)
    }
  }
}

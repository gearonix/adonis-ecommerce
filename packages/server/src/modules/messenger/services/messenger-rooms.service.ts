import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MessengerRoomsEntity } from '@app/entities'
import { FindOperator, Repository } from 'typeorm'

@Injectable()
export class MessengerRoomsService {
  constructor(
        @InjectRepository(MessengerRoomsEntity)
        private rooms: Repository<MessengerRoomsEntity>
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
}

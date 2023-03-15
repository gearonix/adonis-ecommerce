import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MessengerRoomsEntity, UserMessagesEntity } from '@app/entities'
import { ArrayContains, In, Like, Repository } from 'typeorm'
import { AuthService } from '@modules/auth'
import { ServerExceptions } from '@app/types/exceptions'
import { NewMessage } from '@modules/messenger/gateways/chat/requestTypes'
import { FileDirectories } from '@app/types/global'
import { FilesService } from '@modules/files/files.service'

@Injectable()
export class MessengerRoomsService {
  constructor(
        @InjectRepository(MessengerRoomsEntity)
        private rooms: Repository<MessengerRoomsEntity>,
        @InjectRepository(UserMessagesEntity)
        private messages: Repository<UserMessagesEntity>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        private fileService: FilesService
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

  async selectRoom(roomId: number, userId: number) {
    await this.checkUserHasRoom(roomId, userId)

    return this.messages.find({
      where: { roomId }
    })
  }

  async makeMessagesRead(roomId: number, userId: number) {
    const senderId = await this.getOpponentId(roomId, userId)
    return this.messages.update({ senderId }, { isRead: true })
  }
  async makeMessageRead(messageId: number) {
    return this.messages.update({ messageId }, { isRead: true })
  }

  private async getOpponentId(roomId: number, userId: number) {
    const room = await this.rooms.findOneBy({ roomId })
    return userId === room.starterId ? room.invitedId : room.starterId
  }

  async saveMessage({ file, ...message }: NewMessage) {
    if (file) {
      const fileUrl = await this.fileService
          .uploadFile(file, FileDirectories.MESSENGER_ATTACHMENTS)
      return this.messages.save({ ...message, image: fileUrl })
    }
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

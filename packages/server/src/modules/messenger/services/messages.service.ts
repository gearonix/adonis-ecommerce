import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserMessagesEntity } from '@app/entities'
import { Repository } from 'typeorm'
import { NewMessage } from '@modules/messenger/gateways/chatGateway/requestTypes'
import { FileDirectories } from '@app/types/global'
import { FilesService } from '@modules/files/files.service'
import { RoomsService } from '@modules/messenger'

@Injectable()
export class MessagesService {
  constructor(
        @InjectRepository(UserMessagesEntity)
        private messages: Repository<UserMessagesEntity>,
        private fileService: FilesService,
        @Inject(forwardRef(() => RoomsService))
        private roomService: RoomsService
  ) {}


  async selectRoom(roomId: number, userId: number) {
    await this.roomService.checkUserHasRoom(roomId, userId)

    return this.messages.find({
      where: { roomId },
      relations: {
        user: true
      }
    })
  }

  async makeMessagesRead(roomId: number, userId: number) {
    const senderId = await this.roomService.getOpponentId(roomId, userId)
    return this.messages.update({ senderId }, { isRead: true })
  }
  async makeMessageRead(messageId: number) {
    return this.messages.update({ messageId }, { isRead: true })
  }

  async saveMessage({ file, ...message }: NewMessage) {
    let fileUrl = null
    if (file) {
      fileUrl = await this.fileService
          .uploadFile(file, FileDirectories.MESSENGER_ATTACHMENTS)
    }
    const { messageId } = await this.messages.save({ ...message, image: fileUrl })
    return this.messages.findOne({
      where: { messageId },
      relations: { user: true }
    })
  }
}

import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { MessengerRoomsEntity } from '@entities/messenger-rooms.entity'

@Entity('messages')
export class UserMessagesEntity {
    @CreateDateColumn()
      creationDate: Date
    @Column('int')
      roomId: number
    @Column('int')
      senderId: number
    @PrimaryGeneratedColumn()
      messageId: number
    @Column('varchar', { length: 200 })
      messageText: string
  // @JoinColumn({ name: 'roomId', foreignKeyConstraintName:
  //         'FK_messages_roomId', referencedColumnName: 'roomId' })
  //   room: MessengerRoomsEntity
}



import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Lengths } from '@app/types/global'

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
    @Column('varchar', { length: Lengths.IMAGE, nullable: true })
      image: string
    @Column('boolean', { default: false, nullable: true })
      isRead: boolean
}



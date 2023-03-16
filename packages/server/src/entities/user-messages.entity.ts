import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Lengths } from '@app/types/global'
import { ProductCommentsEntity } from '@entities/product-comments.entity'
import { MessengerRoomsEntity } from '@entities/messenger-rooms.entity'
import { UsersEntity } from '@entities/users.entity'

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
    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: 'senderId', foreignKeyConstraintName:
            'FK_messages_senderId_users', referencedColumnName: 'userId' })
      user: UsersEntity
}



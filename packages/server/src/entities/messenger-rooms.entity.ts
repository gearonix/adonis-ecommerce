import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UserMessagesEntity } from '@entities/user-messages.entity'

@Entity('messenger_rooms')
export class MessengerRoomsEntity {
    @CreateDateColumn()
      creationDate: Date
    @Column('json')
      members: number[]
    @PrimaryGeneratedColumn()
      roomId: number
  // @OneToMany(() => UserMessagesEntity, (message) => message.room)
  //   room: MessengerRoomsEntity[]
}



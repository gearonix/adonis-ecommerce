import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('messenger_rooms')
export class MessengerRoomsEntity {
    @CreateDateColumn()
      creationDate: Date
    @Column('json')
      members: number[]
    @PrimaryGeneratedColumn()
      roomId: number
}



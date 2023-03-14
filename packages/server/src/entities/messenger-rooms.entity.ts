import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UserMessagesEntity } from '@entities/user-messages.entity'
import { UsersEntity } from '@entities/users.entity'

@Entity('messenger_rooms')
export class MessengerRoomsEntity {
    @CreateDateColumn()
      creationDate: Date
    @Column('int')
      starterId: number
    @Column('int')
      invitedId: number
    @PrimaryGeneratedColumn()
      roomId: number
    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: 'starterId', foreignKeyConstraintName:
          'FK_rooms_starterId_users', referencedColumnName: 'userId' })
      starterUser: UsersEntity
    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: 'invitedId', foreignKeyConstraintName:
            'FK_rooms_invitedId_users', referencedColumnName: 'userId' })
      invitedUser: UsersEntity
}



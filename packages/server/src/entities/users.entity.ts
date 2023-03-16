import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ProductCommentsEntity } from '@entities/product-comments.entity'
import { PostsEntity } from '@app/entities/posts.entity'
import { Lengths, Roles } from '@app/types/global'
import { MessengerRoomsEntity } from '@entities/messenger-rooms.entity'
import { UserMessagesEntity } from '@entities/user-messages.entity'

@Entity('users')
export class UsersEntity {
  @Column({ type: 'enum', enum: Roles })
    role: Roles
  @Column('varchar', { length: Lengths.TITLE, nullable: true })
    firstName: string
  @Column('varchar', { length: Lengths.TITLE, nullable: true })
    lastName: string
  @Column('varchar', { length: Lengths.TITLE })
    email: string
  @Column('varchar', { length: Lengths.HASH, select: false })
    password: string
  @Column('varchar', { length: Lengths.IMAGE, nullable: true })
    avatar: string
  @Column('varchar', { length: Lengths.IMAGE, nullable: true })
    background: string
  @Column('varchar', { length: Lengths.LONGTEXT, nullable: true })
    description: string
  @PrimaryGeneratedColumn()
    userId: number
  @Column('varchar', { length: Lengths.TITLE, nullable: true })
    country: string
  @Column('varchar', { length: Lengths.TITLE, nullable: true })
    city: string
  @CreateDateColumn()
    registration_date: Date
  @Column('varchar', { length: Lengths.LONGTEXT, nullable: true })
    google_sub: string
  @OneToMany(() => ProductCommentsEntity, (comment) => comment.user)
  @OneToMany(() => PostsEntity, (post) => post.user)
  @OneToMany(() => MessengerRoomsEntity, (room) => room.starterId)
  @OneToMany(() => MessengerRoomsEntity, (room) => room.invitedId)
  @OneToMany(() => UserMessagesEntity, (message) => message.user)
    user: UsersEntity[]
}

import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Lengths} from '@app/types/global'
import {UsersEntity} from '@app/entities/users.entity'

@Entity('posts')
export class PostsEntity {
    @CreateDateColumn()
      date: Date
    @Column('varchar', {length: 170})
      message: string
    @Column('int')
      userId: number
    @Column('varchar', {length: Lengths.IMAGE, nullable: true})
      image: string
    @Column('smallint', {default: true})
      likes: number
    @PrimaryGeneratedColumn()
      postId: number
    @ManyToOne((type) => UsersEntity)
    @JoinColumn({name: 'userId', foreignKeyConstraintName:
            'FK_posts_userId', referencedColumnName: 'userId'})
      user: UsersEntity
}



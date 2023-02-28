import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Lengths} from '@app/types/global'
import {UsersEntity} from '@app/entities/users.entity'

@Entity('product_comments')
export class ProductCommentsEntity {
  @CreateDateColumn()
    date: Date
  @Column('varchar', {length: Lengths.HASH})
    message: string
  @Column('int')
    userId: number
  @Column('smallint', {nullable: true, default: true})
    likes: number
  @Column('int')
    productId: number
  @PrimaryGeneratedColumn()
    commentId: number
  @ManyToOne((type) => UsersEntity)
  @JoinColumn({name: 'userId', foreignKeyConstraintName:
          'FK_comments_userId', referencedColumnName: 'userId'})
    user: UsersEntity
  // @OneToMany((type) => ProductsEntity, (product) => product.comment)
  //   product: UsersEntity[]
}



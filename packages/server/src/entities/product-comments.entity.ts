import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UsersEntity } from '@app/entities/users.entity'

@Entity('product_comments')
export class ProductCommentsEntity {
  @CreateDateColumn()
    date: Date
  @Column('varchar', { length: 170 })
    message: string
  @Column('int')
    userId: number
  @Column('smallint', { nullable: true, default: true })
    likes: number
  @Column('int')
    productId: number
  @PrimaryGeneratedColumn()
    commentId: number
  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'userId', foreignKeyConstraintName:
          'FK_comments_userId', referencedColumnName: 'userId' })
    user: UsersEntity
  // @OneToMany((type) => ProductsEntity, (product) => product.comment)
  //   product: UsersEntity[]
}



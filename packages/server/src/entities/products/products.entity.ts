import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Lengths} from '@app/lib'
import {UsersEntity} from '@app/entities/users.entity'
import {ProductModels, ProductRatings, ProductSizes, ProductTypes} from './types'
import {ProductCommentsEntity} from '@app/entities'

@Entity('products')
export class ProductsEntity {
    @Column('varchar', {length: Lengths.TINY_TITLE, nullable: true})
      name: string
    @Column('smallint')
      price: number
    @Column('tinyint')
      rating: ProductRatings
    @Column('varchar', {length: Lengths.LONGTEXT, nullable: true})
      description: string
    @Column('boolean')
      inStock: boolean
    @Column('json', {nullable: true})
      images: string[]
    @Column('tinyint', {default: true})
      savedCount: number
    @OneToOne((type) => UsersEntity, (user) => user.userId)
    @Column('int')
      salesmanId: number
    @Column('json')
      features: string[]
    @Column('varchar', {length: Lengths.TITLE, nullable: true})
      material: string
    @Column('varchar', {length: Lengths.TINYTEXT, nullable: true})
      type: ProductTypes
    @Column('varchar', {length: Lengths.TINY_TITLE, nullable: true})
      design: string
    @Column('tinyint')
      warrantyCount: number
    @Column('varchar', {length: Lengths.TINY_TITLE, nullable: true})
      model: ProductModels
    @Column('tinyint')
      size: typeof ProductSizes[number]
    @PrimaryGeneratedColumn()
      productId: number
    @Column('int')
      commentId: number
  // @ManyToOne((type) => ProductCommentsEntity)
  // @JoinColumn({name: 'commentId', foreignKeyConstraintName:
  //         'FK_commentId_2', referencedColumnName: 'commentId'})
  //   comment: ProductCommentsEntity
}

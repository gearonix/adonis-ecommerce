import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { UsersEntity } from '@entities/users.entity'
import { ProductModels, ProductRatings, ProductSizes, ProductTypes } from '@app/types/elements/types'
import { Lengths } from '@app/types/global'
import { ProductCommentsEntity } from '@entities/product-comments.entity'

@Entity('products')
export class ProductsEntity {
    @Column('varchar', { length: Lengths.TINY_TITLE, nullable: true })
      name: string
    @Column('smallint')
      price: number
    @Column('tinyint')
      rating: ProductRatings
    @Column('varchar', { length: Lengths.LONGTEXT, nullable: true })
      description: string
    @Column('boolean')
      inStock: boolean
    @Column('json', { nullable: true })
      images: string[]
    @Column('tinyint', { default: true })
      savedCount: number
    @Column('int')
      salesmanId: number
    @Column('json')
      features: string[]
    @Column('varchar', { length: Lengths.TITLE, nullable: true })
      material: string
    @Column('varchar', { length: Lengths.MODEL, nullable: true })
      type: ProductTypes
    @Column('varchar', { length: Lengths.MODEL, nullable: true })
      design: string
    @Column('tinyint')
      warrantyCount: number
    @Column('varchar', { length: Lengths.MODEL, nullable: true })
      model: ProductModels
    @Column('varchar', { length: Lengths.MODEL, nullable: true })
      size: typeof ProductSizes[number]
    @PrimaryGeneratedColumn()
      productId: number
    @CreateDateColumn()
      creationDate: Date
    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: 'salesmanId', foreignKeyConstraintName:
            'FK_products_userId', referencedColumnName: 'userId' })
      salesman: UsersEntity
}

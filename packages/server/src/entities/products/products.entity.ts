import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Lengths} from '@app/lib'
import {UsersEntity} from '@app/entities/users.entity'
import {ProductModels, ProductRatings, ProductSizes, ProductTypes} from "./types";

@Entity('products')
export class ProductsEntity {
    @Column('varchar', {length: Lengths.TINYTITLE, nullable: true})
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
    @Column('tinyint')
      purchasesCount: number
    @OneToOne((type) => UsersEntity, (user) => user.userId)
      salesmanId: number
    @Column('json')
      features: string[]
    @Column('varchar', {length: Lengths.TITLE, nullable: true})
      material: string
    @Column('varchar', {length: Lengths.TINYTEXT, nullable: true})
      type: ProductTypes
    @Column('varchar', {length: Lengths.TINYTITLE, nullable: true})
      design: string
    @Column('tinyint')
      warrantyCount: number
    @Column('varchar', {length: Lengths.TINYTITLE, nullable: true})
      model: ProductModels
    @Column('tinyint')
      size: typeof ProductSizes[number]
    @PrimaryGeneratedColumn()
      productId: number
}

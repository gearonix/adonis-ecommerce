import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('saved')
export class SavedEntity {
    @Column('int')
      userId: number
    @Column('int')
      productId: number
    @PrimaryGeneratedColumn()
      savedId: number
}

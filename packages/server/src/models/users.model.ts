import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,} from 'typeorm'
import {Lengths, Roles} from '@app/lib'

@Entity('users')
export class UsersModel {
  @Column({type: 'enum', enum: Roles})
    role: Roles
  @Column('varchar', {length: Lengths.TITLE, nullable: true})
    firstName: string
  @Column('varchar', {length: Lengths.TITLE, nullable: true})
    lastName: string
  @Column('varchar', {length: Lengths.TITLE})
    email: string
  @Column('varchar', {length: Lengths.HASH, select: false})
    password: string
  @Column('varchar', {length: Lengths.IMAGE, nullable: true})
    avatar: string
  @Column('varchar', {length: Lengths.IMAGE, nullable: true})
    background: string
  @Column('varchar', {length: Lengths.LONGTEXT, nullable: true})
    description: string
  @PrimaryGeneratedColumn()
    userId: number
  @Column('varchar', {length: Lengths.TITLE, nullable: true})
    country: string
  @Column('varchar', {length: Lengths.TITLE, nullable: true})
    city: string
  @CreateDateColumn()
    registration_date: Date
  @Column('varchar', {length: Lengths.LONGTEXT, nullable: true})
    google_sub: string
}

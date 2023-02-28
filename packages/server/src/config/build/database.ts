import * as process from 'process'
import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import {ProductsEntity, UsersEntity, SavedEntity, ProductCommentsEntity} from '@app/entities'

export const buildDBConfig = (): TypeOrmModuleOptions => {
  const {HOST_NAME, DB_PORT, USER_NAME, PASSWORD, DATABASE_NAME} =
    process.env

  const entities = [UsersEntity, ProductsEntity, SavedEntity, ProductCommentsEntity]

  return {
    type: 'mysql',
    host: HOST_NAME,
    port: +DB_PORT,
    username: USER_NAME,
    password: PASSWORD,
    database: DATABASE_NAME,
    synchronize: true,
    entities,
  }
}

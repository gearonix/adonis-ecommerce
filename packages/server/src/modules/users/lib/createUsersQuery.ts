import { UsersDTO } from '@modules/users/dto/usersDTO'
import { UsersEntity } from '@app/entities'
import { Like } from 'typeorm'
import { Roles } from '@app/types/global'

export const createUsersQuery = (query: UsersDTO) => {
  const createQuery = (field: keyof UsersEntity) => ({
    [field]: Like(`%${query.search || ''}%`),
    role: query.role === 'null' ? undefined : Roles.SALESMAN
  })

  if (query.role || query.search) {
    return [createQuery('firstName'), createQuery('lastName'), createQuery('email')]
  }
}

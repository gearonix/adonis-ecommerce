import { Roles } from '@app/types/global'

export class UsersDTO {
  readonly search?: string
  readonly role: Roles | 'null'
  readonly page: string
}

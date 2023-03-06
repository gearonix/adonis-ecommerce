import { Controller, Get, Param } from '@nestjs/common'
import { UsersService } from '@modules/users'
import { sleep } from '@app/lib/helpers'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id) {
    return this.usersService.getUserById(+id)
  }
}

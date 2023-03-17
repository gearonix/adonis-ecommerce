import { Controller, Get, Param, Query } from '@nestjs/common'
import { UsersService } from '@modules/users'
import { UsersDTO } from '@modules/users/dto/usersDTO'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id) {
    return this.usersService.getUserById(+id)
  }
  @Get()
  async getUsers(@Query() query: UsersDTO) {
    console.log(query)
    return this.usersService.getUsers(query)
  }
}

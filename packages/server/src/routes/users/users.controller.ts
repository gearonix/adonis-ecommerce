import {Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {UsersService} from './users.service'
import {AuthGuard} from '@app/routes/auth/auth.guard'
import {EditProfileForm} from './dto/editProfileDTO'
import {ObjectOptional} from '@app/types/helpers'
import {FileInterceptor} from '@nestjs/platform-express'

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/change/profile')
  changeProfile(@Body() body: ObjectOptional<EditProfileForm>) {
    return this.usersService.changeProfile(body)
  }

  @Post('/change/avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  async changeAvatar(@UploadedFile() avatar) {
    const fileUrl = await this.usersService.changeUserImage(avatar)
    return {fileUrl}
  }

  @Post('/change/background')
  @UseInterceptors(FileInterceptor('user_background'))
  async changeUserBackground(@UploadedFile() background) {
    const fileUrl = await this.usersService.changeUserBackground(background)
    return {fileUrl}
  }
}

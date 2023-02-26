import {Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {UsersService} from './services/users.service'
import {AuthGuard} from '@app/routes/auth/auth.guard'
import {EditProfileForm} from './dto/editProfileDTO'
import {ObjectOptional} from '@app/types/helpers'
import {FileInterceptor} from '@nestjs/platform-express'
import {ProfileService} from './services/profile.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService,
              private profileService: ProfileService) {}
  @UseGuards(AuthGuard)
  @Post('/change/profile')
  changeProfile(@Body() body: ObjectOptional<EditProfileForm>) {
    return this.profileService.changeProfile(body)
  }
  @UseGuards(AuthGuard)
  @Post('/change/avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  async changeAvatar(@UploadedFile() avatar) {
    const fileUrl = await this.profileService.changeUserImage(avatar)
    return {fileUrl}
  }
  @UseGuards(AuthGuard)
  @Post('/change/background')
  @UseInterceptors(FileInterceptor('user_background'))
  async changeUserBackground(@UploadedFile() background) {
    const fileUrl = await this.profileService.changeUserBackground(background)
    return {fileUrl}
  }

  @Get(':id')
  async getUser(@Param('id') id) {
    return this.usersService.getUserById(+id)
  }
}

import {Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {UsersService} from './services/users.service'
import {AuthGuard} from '@app/routes/auth/auth.guard'
import {EditProfileForm} from './dto/editProfileDTO'
import {ObjectOptional} from '@app/types/helpers'
import {FileInterceptor} from '@nestjs/platform-express'
import {ProfileService} from './services/profile.service'

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService,
              private profileService: ProfileService) {}

  @Post('/change/profile')
  changeProfile(@Body() body: ObjectOptional<EditProfileForm>) {
    return this.profileService.changeProfile(body)
  }

  @Post('/change/avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  async changeAvatar(@UploadedFile() avatar) {
    const fileUrl = await this.profileService.changeUserImage(avatar)
    return {fileUrl}
  }

  @Post('/change/background')
  @UseInterceptors(FileInterceptor('user_background'))
  async changeUserBackground(@UploadedFile() background) {
    const fileUrl = await this.profileService.changeUserBackground(background)
    return {fileUrl}
  }
}

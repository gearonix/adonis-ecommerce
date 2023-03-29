import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@app/modules/auth/auth.guard'
import { EditProfileForm } from './../dto/editProfileDTO'
import { ObjectOptional } from '@app/types/helpers'
import { FileInterceptor } from '@nestjs/platform-express'
import { ProfileService } from '@modules/users/services'
import { FileDirectories } from '@app/types/global'

@Controller('users/change')
export class ChangeProfileController {
  constructor( private profileService: ProfileService) {}
  @UseGuards(AuthGuard)
  @Post()
  changeProfile(@Body() body: ObjectOptional<EditProfileForm>) {
    return this.profileService.changeProfile(body)
  }
  @UseGuards(AuthGuard)
  @Post('/avatar')
  @UseInterceptors(FileInterceptor(FileDirectories.USER_AVATAR))
  async changeAvatar(@UploadedFile() avatar) {
    const fileUrl = await this.profileService.changeUserImage(avatar)
    return { fileUrl }
  }
  @UseGuards(AuthGuard)
  @Post('/background')
  @UseInterceptors(FileInterceptor(FileDirectories.USER_BACKGROUND))
  async changeUserBackground(@UploadedFile() background) {
    const fileUrl = await this.profileService.changeUserBackground(background)
    return { fileUrl }
  }
}

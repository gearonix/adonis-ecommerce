import {forwardRef, HttpException, HttpStatus, Inject} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {UsersModel} from '@app/models'
import {Repository} from 'typeorm'
import {FileDirectories} from '@app/types/models'
import {ObjectOptional} from '@app/types/helpers'
import {EditProfileForm} from '@routes/users/dto/editProfileDTO'
import {AuthService} from '@routes/auth'
import {ServerExceptions} from '@app/types/exceptions'
import {FilesService} from '@modules/files/files.service'
import {UsersService} from '@routes/users'

export class ProfileService {
  constructor(
        @InjectRepository(UsersModel)
        private users: Repository<UsersModel>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        private fileService: FilesService,
        private usersService: UsersService,
  ) {}

  async changeProfile(
      data: ObjectOptional<EditProfileForm>,
  ): Promise<UsersModel> {
    const userId = await this.authService.getUserIdByPayload()
    const response = await this.users.update({userId}, data)
    if (!response.affected) {
      throw new HttpException(
          ServerExceptions.INCORRECT_USER_DATA,
          HttpStatus.ACCEPTED,
      )
    }

    return this.usersService.getUserById(userId)
  }

  private async replaceOldFileToNew(image: any, userId, mode: FileDirectories,
      getPath: (userId: number) => Promise<string>) {
    const fileUrl = await this.fileService.uploadFile(image, mode)


    const oldImage = await getPath(userId)

    if (oldImage) {
      await this.fileService.deleteFile(oldImage, mode)
    }

    return fileUrl
  }

  async changeUserImage(image: any): Promise<string> {
    const userId = await this.authService.getUserIdByPayload()
    const fileUrl = await this.replaceOldFileToNew(image, userId,
        FileDirectories.USER_AVATAR, this.usersService.getUserAvatar.bind(this.usersService))

    await this.users.update({userId}, {avatar: fileUrl})
    return fileUrl
  }

  async changeUserBackground(image: any): Promise<string> {
    const userId = await this.authService.getUserIdByPayload()
    const fileUrl = await this.replaceOldFileToNew(image, userId,
        FileDirectories.USER_BACKGROUND, this.usersService.getUserBackground.bind(this.usersService))

    await this.users.update({userId}, {background: fileUrl})
    return fileUrl
  }
}